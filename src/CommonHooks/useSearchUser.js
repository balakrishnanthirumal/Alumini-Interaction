import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async () => {
    setIsLoading(true);
    try {
      // Query for users where isAlumini is true
      const userQuery = query(
        collection(firestore, "user"),
        where("isAlumini", "==", true)
      );

      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        showToast("Error", "No users found", "error");
        setUser(null);
      } else {
        const results = [];
        querySnapshot.forEach((doc) => {
          results.push(doc.data());
        });
        setUser(results); // Store all results
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile };
};

export default useSearchUser;
