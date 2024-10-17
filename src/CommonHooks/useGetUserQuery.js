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
    let isMounted = true;  // To ensure state updates only when component is mounted

    const getQueries = async () => {
      if (!userProfile || !isMounted) return;

      setIsUpdating(true);
      dispatch(setQuery([]));

      try {
        const q = query(
          collection(firestore, "query"),
          where("createdBy", "==", userProfile.uid)
        );
        const querySnapshot = await getDocs(q);

        const queries = [];
        querySnapshot.forEach((doc) => {
          queries.push({ ...doc.data(), id: doc.id });
        });

        // Sort queries by createdAt descending order
        queries.sort((a, b) => b.createdAt - a.createdAt);

        if (isMounted) dispatch(setQuery(queries));
      } catch (error) {
        if (isMounted) {
          showToast("Error", error.message, "error");
          dispatch(setQuery([]));
        }
      } finally {
        if (isMounted) setIsUpdating(false);
      }
    };

    getQueries();

    return () => {
      isMounted = false;  // Cleanup function to prevent state updates if unmounted
    };
  },[]);

  console.log(queries);
  return { isUpdating, queries };
};

export default useGetUserQuery;
