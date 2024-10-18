import QueryAnswerHeader from "../../components/QueryAnswer/QueryAnswerHeader";
import QueryAnswerContent from "../../components/QueryAnswer/QueryAnswerContent";
const QueryAnswerPage = () => {
  
  return (
    <section className="bg-[#FA8A8A] min-h-[800px] max-h-auto w-full pb-[100px] flex flex-col ">
      <div className=" auto pb-[30px] mt-[40px]">


        
        <QueryAnswerHeader/>

        <QueryAnswerContent/>
        <QueryAnswerContent/>
        <QueryAnswerContent/>
      </div>
    </section>
  );
};
export default QueryAnswerPage;
