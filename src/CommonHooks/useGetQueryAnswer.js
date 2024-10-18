import { useState } from "react";
import  useShowToast  from "./useShowToast";
import { useDispatch, useSelector } from "react-redux";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { addAnswer } from "../store/queryStore";
import { firestore } from "../firebase/firebase";

const useQueryAnswer = () => {
    
    const [isAnswering, setIsAnswering] = useState(false);
    const showToast = useShowToast();
    const authUser = useSelector(state => state.auth.user);
    const dispatch = useDispatch();


    const handleQueryAnswer = async (queryId, answer) => {
        if(isAnswering) return;
        if(!authUser) return showToast("Error", "Please login to comment", "error");
        setIsCommenting(true);
        const newAnswer ={
            answer: answer,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            queryId: queryId,
        }
        try {
           await updateDoc(doc(firestore, "query", queryId), {
               answers: arrayUnion(newAnswer)
           })

           dispatch(addAnswer(queryId,newAnswer));
        } catch (error) {
            showToast("Error", error.message, "error");
        }
        finally{
            setIsAnswering(false);
        }
        
    }
    return {isAnswering, handleQueryAnswer}
}
export default useQueryAnswer