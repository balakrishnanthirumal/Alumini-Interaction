import { useState } from "react";
import  useShowToast  from "./useShowToast";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/postStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const usePostComment = () => {
    
    const [isCommenting, setIsCommenting] = useState(false);
    const showToast = useShowToast();
    const authUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();


    const handlePostComment = async (postId, comment) => {
        if(isCommenting) return;
        if(!authUser) return showToast("Error", "Please login to comment", "error");
        setIsCommenting(true);
        const newComment ={
            comment: comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId: postId,
        }
        try {
           await updateDoc(doc(firestore, "posts", postId), {
               comments: arrayUnion(newComment)
           })

           dispatch(addComment(postId,newComment));
        } catch (error) {
            showToast("Error", error.message, "error");
        }
        finally{
            setIsCommenting(false);
        }
    }

    return {isCommenting, handlePostComment}
}
export default usePostComment