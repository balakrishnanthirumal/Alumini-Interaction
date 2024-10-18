
import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../store/postStore";
const useGetUserPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
    const posts = useSelector((state) => state.post.posts);
	const showToast = useShowToast();
	const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();
	useEffect(() => {
		const getPosts = async () => {
			if (!userProfile) return;
			setIsLoading(true);
			dispatch(setPost([]));
			try {
				const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
				const querySnapshot = await getDocs(q);
				const post = [];
				querySnapshot.forEach((doc) => {
					post.push({ ...doc.data(), id: doc.id });
				});
				post.sort((a, b) => b.createdAt - a.createdAt);
				dispatch(setPost(post));
			} catch (error) {
                showToast("Error", error.message, "error");
				dispatch(setPost([]));
			} finally {
				setIsLoading(false);
			}
		};
		getPosts();
	}, [setPost, userProfile, showToast]);
	return { isLoading, posts };
};
export default useGetUserPosts;