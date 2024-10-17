import { use } from "framer-motion/client";
import { useState } from "react";
import useQueryAnswer from "../../CommonHooks/useGetQueryAnswer";

const QueryAnswerHeader = () => {
  const {isAnswering, handleQUeryAnswer} = useQueryAnswer();
  const [answer, setAnswer] = useState("");
  const [isFollow, setIsFollow] = useState(false);

  const handleSubmitAnswer = async() =>{
    await handleQUeryAnswer(answer);
  }
  return (
    <>
      <header className="h-[70px] flex justify-between px-[30px] border-b-[1px]">
        <div className="flex items-center mb-[30px]">
          <img
            src="/profilePic.png"
            alt=""
            className="h-[50px] w-[50px] rounded-[50%]"
          />
          <h1 className="text-2xl ml-[20px]">Username</h1>
        </div>
        <div className="flex items-center mb-[30px]">
          <button
            className="text-2xl mt-[10px]"
            onClick={() => setIsFollow(!isFollow)}
          >
            {isFollow ? "UnFollow" : "Follow"}
          </button>
        </div>
      </header>

      <section className="border-b-[1px]">
        <div className="ml-[30px] mt-[20px] text-[30px] break-words">
          Question:&nbsp;&nbsp;&nbsp;How to not suffer in the life and how one
          shall live a life peacefully
        </div>
        <p className="ml-[30px] mb-[10px]">Date: 01-01-2022</p>
      </section>
      <div className="mt-[30px] h-[50px] ml-[30px] bg-[#fff] rounded-md w-[80%] flex gap-[40px] justify-center items-center">
        <input
          type="text"
          className="w-[1000px] h-[35px]  mt-[10px] rounded-md  text-xl ml-4 outline-none" value={answer} onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          className=" border-[1px] mr-[20px] mt-[10px] h-[35px] px-[5px] rounded-sm text-[20px] float-right"
          onClick={handleSubmitAnswer}
        >
          Comment
        </button>

      </div>
    </>
  );
};
export default QueryAnswerHeader;
