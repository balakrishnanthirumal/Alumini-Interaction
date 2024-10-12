import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "../CommonHooks/useShowToast";

const useLogOut = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handleLogout = async() =>{
        try {
            await signOut();
            localStorage.removeItem("user-info");
            showToast("Success", "Logged Out Successfully", "success");
            console.log("Logged Out");
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return {handleLogout, loading, error}
}
export default useLogOut