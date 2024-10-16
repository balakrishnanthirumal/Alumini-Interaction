import { useEffect, useState } from "react";

import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { setUser } from "../store/authSlice";
import { setUserProfile } from "../store/userProfileStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const useFollowUser = (userId) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);
	const authUser = useSelector((state) => state.auth.user);
    const userProfile = useSelector((state) => state.profile.userProfile);
	const showToast = useShowToast();
    const dispatch = useDispatch();
	const handleFollowUser = async () => {
		setIsUpdating(true);
		try {
			const currentUserRef = doc(firestore, "user", authUser.uid);
			const userToFollowOrUnfollorRef = doc(firestore, "user", userId);
			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			await updateDoc(userToFollowOrUnfollorRef, {
				followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
			});

			if (isFollowing) {
				// unfollow
				dispatch(setUser({
					...authUser,
					following: authUser.following.filter((uid) => uid !== userId),
				}));
				if (userProfile)
					dispatch(setUserProfile({
						...userProfile,
						followers: userProfile.followers.filter((uid) => uid !== authUser.uid),
					}));

				localStorage.setItem(
					"user-info",
					JSON.stringify({
						...authUser,
						following: authUser.following.filter((uid) => uid !== userId),
					})
				);
				setIsFollowing(false);
			} else {
				// follow
				dispatch(setUser({
					...authUser,
					following: [...authUser.following, userId],
				}));

				if (userProfile)
					dispatch(setUserProfile({
						...userProfile,
						followers: [...userProfile.followers, authUser.uid],
					}));

				localStorage.setItem(
					"user-info",
					JSON.stringify({
						...authUser,
						following: [...authUser.following, userId],
					})
				);
				setIsFollowing(true);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsUpdating(false);
		}
	};

	useEffect(() => {
		if (authUser) {
			const isFollowing = authUser.following.includes(userId);
			setIsFollowing(isFollowing);
		}
	}, [authUser, userId]);

	return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;