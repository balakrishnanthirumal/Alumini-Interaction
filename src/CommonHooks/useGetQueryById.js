
import { useEffect, useState } from "react";
import { getDoc} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { setQuery } from "../store/queryStore";
import { useParams } from "react-router";
const useGetQueryCaption = () => {
	const [isLoading, setIsLoading] = useState(true);
    const {queryId} = useParams()
    const [caption, setCaption] = useState(null)
	console.log(queryId)
	useEffect(() => {
		const getQuery = async () => {
			setIsLoading(true);
			try {
				const docRef = doc(firestore, "query", queryId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setCaption(docSnap.data())
                }

			} catch (error) {
                return
			} finally {
				setIsLoading(false);
			}
		};
		getQuery();
        
	}, [setCaption, caption]);
	
    console.log(caption)
	return { isLoading, caption };
};
export default useGetQueryCaption;