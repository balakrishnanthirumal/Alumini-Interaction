import { div } from "framer-motion/client"

const QueryAnswerContent = ({queries, index}) => {
  console.log(queries)
  return (
    <main className="mt-[50px] w-[80%] mx-auto bg-[#D9D9D9] h-auto border-2 pt-[20px] pb-[20px]">

      {queries?.comment.length === 0 ? (
        <div>No Answers yet Please give one</div>
      ) :
      <div className=" h-[auto] flex flex-col ">
      <p className="ml-[30px] break-words text-[25px]">
        Answer {index + 1}:&nbsp;&nbsp;&nbsp; {queries.comment}
      </p>
      <div className="mt-[10px] ml-[100px] flex gap-9 h-auto">
        
      </div>
    </div>
    }
    
  </main>
  )
}
export default QueryAnswerContent