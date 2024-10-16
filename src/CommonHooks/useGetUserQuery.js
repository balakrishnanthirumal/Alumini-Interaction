import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../store/queryStore";
const useGetUserQuery = () => {
	const [isUpdating, setIsUpdating] = useState(true);
    const queries = useSelector((state) => state.query.queries);
	const showToast = useShowToast();
	const userProfile = useSelector((state) => state.profile.userProfile);
    const dispatch = useDispatch();
	useEffect(() => {
		const getQueries = async () => {
			if (!userProfile) return;
			setIsUpdating(true);
			dispatch(setQuery([]));

			try {
				const q = query(collection(firestore, "query"), where("createdBy", "==", userProfile.uid));
				const querySnapshot = await getDocs(q);

				const queries = [];
				querySnapshot.forEach((doc) => {
                    queries.push({ ...doc.data(), id: doc.id });
				});

                queries.sort((a, b) => b.createdAt - a.createdAt);
				dispatch(setQuery(queries));
			} catch (error) {
				showToast("Error", error.message, "error");
				dispatch(setQuery([]));
			} finally {
				setIsUpdating(false);
			}
		};

		getQueries();
	}, [setQuery, userProfile, showToast]);
    console.log(queries)
	return { isUpdating, queries };
};

export default useGetUserQuery;