import { useEffect, useState } from "react";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../store/queryStore";
import { setUserProfile } from "../store/userProfileStore";
import { firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
const useGetFeedQuery = () => {
	const [isUpdating, setIsLoading] = useState(true);
     const  queries = useSelector((state) => state.query.queries);
    const authUser = useSelector((state) => state.auth.user);
	const showToast = useShowToast();

    const dispatch = useDispatch();
	useEffect(() => {
		const getFeedQuery = async () => {
			setIsLoading(true);
			if (authUser.following.length === 0) {
				setIsLoading(false);
				dispatch(setQuery([]));
				return;
			}
			const q = query(collection(firestore, "query"), where("createdBy", "in", authUser.following));
			try {
				const querySnapshot = await getDocs(q);
				const feedQueries = [];

				querySnapshot.forEach((doc) => {
                    feedQueries.push({ id: doc.id, ...doc.data() });
				});

				feedQueries.sort((a, b) => b.createdAt - a.createdAt);
				dispatch(setQuery(feedQueries));
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		if (authUser) getFeedQuery();
	}, [authUser, showToast, setQuery, setUserProfile]);
    console.log(queries)
	return { isUpdating, queries };
};

export default useGetFeedQuery;