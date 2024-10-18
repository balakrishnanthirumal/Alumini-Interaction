import { useState } from "react";

const QueryAnswerHeader = () => {
    const [isFollow, setIsFollow] = useState(false);
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
  </>
  )
}
export default QueryAnswerHeader