import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const useSignUpWithEmail = () => {
  const dispatch = useDispatch();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.name) {
      showToast("Error", "Please Fill all the fields", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      showToast("Error", "Please Enter a valid Email", "error");
      return;
    }

    if (inputs.password.length < 6) {
      showToast("Error", "Password must be at least 6 characters", "error");
      return;
    }

    const userRef = collection(firestore, "user");
    const q = query(userRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      if (newUser) {
        let userDoc;
        if(inputs.isAlumini){
          userDoc = {
            uid: newUser.user.uid,
            email: inputs.email,
            name: inputs.name,
            username: inputs.username || "",
            domainKnowledge: inputs.domainKnowledge || "",
            organisationName: inputs.organisatioName || "",
            location: inputs.location || "",
            designation: inputs.desigination || "",
            batch: inputs.batch || "",
            profilePicURL: "",
            followers: [],
            following: [],
            posts: [],
            queries: [],
            saved: [],
            createdAt: Date.now(),
            isAlumini: true,
          }
          
         
        }

        else{
          userDoc = {
            uid: newUser.user.uid,
            email: inputs.email,
            name: inputs.name,
            username: inputs.username || "",
            domainKnowledge: inputs.domain || "",
            profilePicURL: "",
            followers: [],
            following: [],
            posts: [],
            queries: [],
            saved: [],
            createdAt: Date.now(),
            isAlumini: false,
          }
        }


        await setDoc(doc(firestore, "user", newUser.user.uid), userDoc);
        console.log("User document created successfully");

        localStorage.setItem("user-info", JSON.stringify(userDoc));
        dispatch(login(userDoc));
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      return;
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmail;
