import { useSelector } from "react-redux";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import setUser from "../store/authSlice";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../store/userProfileStore";
import { useEffect, useState } from "react";

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const showToast = useShowToast();


  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return;
    setIsUpdating(true);
    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "user", authUser.uid);
    let URL = "";
    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
      }
      let updatedUser = {};
      if (authUser.isAlumini) {
        updatedUser = {
          ...authUser,
          name: inputs.name || authUser.name,
          username: inputs.username || authUser.username,
          domainKnowledge: inputs.domainKnowlege || authUser.domainKnowledge,
          designation: inputs.designation || authUser.designation,
          organisationName: inputs.company || authUser.organisationName,
          location: inputs.location || authUser.location,
          profilePicURL: URL || authUser.profilePicURL,
        };
      } else {
        updatedUser = {
          ...authUser,
          name: inputs.name || authUser.name,
          username: inputs.username || authUser.username,
          profilePicURL: URL || authUser.profilePicURL,
          domainKnowledge: inputs.domainKnowlege || authUser.domainKnowledge,
        };
      }

      console.log(updatedUser);

      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));

      dispatch(setUser(updatedUser));
      dispatch(setUserProfile(updatedUser));
      showToast("Success", "Profile Updated Successfully", "success");
    } catch (error) {
      return;
    }
  };
  return { editProfile, isUpdating };
};
export default useEditProfile;
