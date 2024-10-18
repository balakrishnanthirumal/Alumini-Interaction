import { useState, useEffect } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
const useGetQueryById = (queryId) => {
    const [isFetching, setIsFetching] = useState(false);
    const [query, setQuery] = useState(null);
    const showToast = useShowToast();
    
    const getQueryById = async () => {
        setIsFetching(true);
        setQuery(null);
        try {
            const queryRefDoc = doc(firestore, "query", queryId);
            const queryDoc = await getDoc(queryRefDoc);
            if (queryDoc.exists()) {
                setQuery(queryDoc.data());
            } else {
                return;
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsFetching(false);
        }
    };

    useEffect(() => {
         
            getQueryById();
        
    }, [queryId, setIsFetching]); 
    return { isFetching, query };
};

export default useGetQueryById;
