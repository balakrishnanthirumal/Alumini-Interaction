import QueryAnswerHeader from "../../components/QueryAnswer/QueryAnswerHeader";
import QueryAnswerContent from "../../components/QueryAnswer/QueryAnswerContent";
import { useParams } from "react-router";
import useGetQueryById from "../../CommonHooks/useGetQueryById.js";
import NavigationBar from "../../components/NavigationBar/NavigationBar.jsx";

const QueryAnswerPage = () => {
  const { queryId } = useParams();
  const { isFetching, query } = useGetQueryById(queryId);
  console.log(queryId);
  return (
    <>
    <section className="bg-[#FA8A8A] min-h-[800px] max-h-auto w-full pb-[100px] flex flex-col ">
    <NavigationBar />

      <div className="auto pb-[30px] mt-[40px]">

        
          {isFetching ? (
            <div className="text-3xl">Loading.....</div>
          ) : (
            <div>
              <QueryAnswerHeader queries={query} />
              { query?.comments ===0? <div className="text-3xl">No Answers yet Please give one</div> :  query?.comments.map((answer, index) => (
                <QueryAnswerContent queries={answer} key={index} index={index}/>
              ))}
            </div>
          )}
        
      </div>
    </section>
    </>
  );
};

export default QueryAnswerPage;
