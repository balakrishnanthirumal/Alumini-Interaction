import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../store/userProfileStore";

const useGetUserProfileByUsername = (username) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.profile.userProfile);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(collection(firestore, "user"), where("username", "==", username));
        const querySnapshot = await getDocs(q);

        // If no user profile found, set to null in Redux store
        if (querySnapshot.empty) {
          dispatch(setUserProfile(null)); // Update Redux store with null for "not found"
          return;
        }

        // If user profile found, update Redux store with the profile data
        let userDoc;
        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        dispatch(setUserProfile(userDoc));
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [dispatch, username, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
