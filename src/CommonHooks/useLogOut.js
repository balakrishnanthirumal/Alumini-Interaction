import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "../CommonHooks/useShowToast";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

const useLogOut = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();
    const dispatch = useDispatch();
    const handleLogout = async() =>{
        try {
            await signOut();
            localStorage.removeItem("user-info");
            dispatch(logout());
            showToast("Success", "Logged Out Successfully", "success");
            
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return {handleLogout, loading, error}
}
export default useLogOut