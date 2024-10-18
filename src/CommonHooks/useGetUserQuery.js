
import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../store/queryStore";
const useGetUserQuery = () => {
	const [isLoading, setIsLoading] = useState(true);
	const queries = useSelector((state) => state.query.queries);
	const showToast = useShowToast();
	const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();
	console.log(userProfile)
	useEffect(() => {
		const getQuery = async () => {
			if (!userProfile) return;
			setIsLoading(true);
			dispatch(setQuery([]));
			try {
				const q = query(collection(firestore, "query"), where("createdBy", "==", userProfile.uid));
				const querySnapshot = await getDocs(q);
				const queries = [];
				querySnapshot.forEach((doc) => {
					queries.push({ ...doc.data(), id: doc.id });
				});
				queries.sort((a, b) => b.createdAt - a.createdAt); // Sorting queries
				dispatch(setQuery(queries));
			} catch (error) {
				showToast("Error", error.message, "error");
				dispatch(setQuery([]));
			} finally {
				setIsLoading(false);
			}
		};
		getQuery();
	}, [userProfile, showToast, dispatch]);
	

	console.log(queries)
	return { isLoading, queries };
};
export default useGetUserQuery;