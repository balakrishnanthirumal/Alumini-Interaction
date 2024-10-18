import { useEffect, useState } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postStore";
import { setUserProfile } from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
const useGetFeedPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
     const  posts = useSelector((state) => state.post.posts);
    const authUser = useSelector((state) => state.auth.user);
	const showToast = useShowToast();

    const dispatch = useDispatch();
	useEffect(() => {
		const getFeedPosts = async () => {
			setIsLoading(true);
			if (authUser.following.length === 0) {
				setIsLoading(false);
				dispatch(setPost([]));
				return;
			}
			const q = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following));
			try {
				const querySnapshot = await getDocs(q);
				const feedPosts = [];

				querySnapshot.forEach((doc) => {
					feedPosts.push({ id: doc.id, ...doc.data() });
				});

				feedPosts.sort((a, b) => b.createdAt - a.createdAt);
				dispatch(setPost(feedPosts));
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getFeedPosts();
	}, [authUser, showToast, setPost, setUserProfile]);

	return { isLoading, posts };
};

export default useGetFeedPosts;