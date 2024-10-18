import { useDispatch } from "react-redux";
import useShowToast from "../../CommonHooks/useShowToast";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import QueryCard from "../../components/QueryCard/QueryCard";
import { addQuery } from "../../store/userProfileStore";
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { createQuery } from "../../store/queryStore";
import { useState } from "react";
import { useSelector } from "react-redux";
import useGetFeedQuery from "../../CommonHooks/UseGetFeedQuery";

const QueryFeedPage = () => {
  const [caption, setCaption] = useState("");
  const { isLoading, handleCreateQuery } = useCreateQuery();
  const showToast = useShowToast();
  const {isUpdating, queries} = useGetFeedQuery();
  const handleCreationQuery = async () => {
    try {
      await handleCreateQuery(caption);
      console.log("Query created");
      showToast("Success", "Query created successfully", "success");
      setCaption("");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <div className="bg-[#FA8A8A] min-h-[100vh] max-h-max w-full border-solid border-[1px]">
      <NavigationBar />
      <section className="mt-[40px] border-b-[1px] pb-[20px]">
        <div className="text-[36px] w-[153px] h-[44px] mx-auto">QUERIES</div>
      </section>

      <main>
        <div className="w-[750px] border-[1px] p-[10px] mx-auto mt-[80px] rounded-md bg-[#fff]">
          <input
            type="text"
            className="w-[650px] h-[60px] ml[10px] placeholder:text-2xl my-auto text-2xl outline-none"
            placeholder="ASK YOUR QUESTIONS"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <button
            className="cursor-pointer text-2xl mr-[5px]"
            onClick={handleCreationQuery}
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>

        <div className="w-[750px] p-[10px] mx-auto mt-[80px] rounded-md flex flex-col justify-center items-center">
          
          {!isUpdating ? queries?.map((query) => (
            <QueryCard key={query.id} query={query} />
          )) : <div className="text-3xl">Loading...</div>}
        </div>
      </main>
    </div>
  );
};
export default QueryFeedPage;

function useCreateQuery() {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleCreateQuery = async (caption) => {
    if (isLoading) return;
    setIsLoading(true);

    const newQuery = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    };

    try {
      const queryDocRef = await addDoc(collection(firestore, "query"), newQuery);
      const userDocRef = doc(firestore, "user", authUser.uid);

      await updateDoc(userDocRef, { queries: arrayUnion(queryDocRef.id) });

      dispatch(createQuery({ ...newQuery, id: queryDocRef.id }));
      dispatch(addQuery({ ...newQuery, id: queryDocRef.id }));

      showToast("Success", "Query created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreateQuery };
}
