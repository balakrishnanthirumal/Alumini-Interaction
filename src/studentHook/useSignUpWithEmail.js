import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";

const useSignUpWithEmail = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const showToast = useShowToast();
  const signup = async (inputs) => {
    if (!inputs.email || !inputs.password || !inputs.name) {
      showToast("Error", "Please Fill all the fields", "error");
      return;
    }

    // Add validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
        showToast("Error", "Please Enter a valid Email", "error");
      return;
    }

    if (inputs.password.length < 6) {
      showToast("Error", "Password must be at least 6 characters", "error");
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
        const userDoc = {
          uid: newUser.user.uid,
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          domain: inputs.domain,
         
          createdAt: serverTimestamp(),
        };

        await setDoc(doc(firestore, "student", newUser.user.uid), userDoc);
        console.log("User document created successfully");

        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
        showToast("Error", error.message, "error");
        return;
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmail;
