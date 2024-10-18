import { useState } from "react";
import useShowToast from "./useShowToast";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { addAnswer } from "../store/queryStore";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const usePostComment = () => {
	const [isCommenting, setIsCommenting] = useState(false);
	const showToast = useShowToast();
    const authUser= useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

	const handlePostComment = async (queryId, comment) => {
		if (isCommenting) return;
		if (!authUser) return showToast("Error", "You must be logged in to answer", "error");
		setIsCommenting(true);
		const newComment = {
			comment,
			createdAt: Date.now(),
			createdBy: authUser.uid,
            queryId: queryId,
		};
		try {
			await updateDoc(doc(firestore, "query", queryId), {
				comments: arrayUnion(newComment),
			});
			dispatch(addAnswer(queryId, newComment));
			showToast("Success", "Answer added successfully", "success");
		} catch (error) {
			showToast("Error", error.message, "error");
		} finally {
			setIsCommenting(false);
		}
	};

	return { isCommenting, handlePostComment,  };
};

export default usePostComment;