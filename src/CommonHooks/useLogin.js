import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const useLogin = () => {

    const dispatch = useDispatch();
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const loginIn = async(inputs) =>{
    if(!inputs.email || !inputs.password){
        showToast("Error", "Please Fill all the fields", "error");
        return;
    }
    try {
        const userCreds = await signInWithEmailAndPassword(inputs.email, inputs.password);

        if(userCreds){
            const docRef = doc(firestore , "user", userCreds.user.uid);
            const docSnap = await getDoc(docRef);
            localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
            dispatch(login(docSnap.data()));
        }       

    } catch (error) {
        showToast("Error", error.message, "error");
    }
  
}
    return {loginIn, loading, error}
}
export default useLogin