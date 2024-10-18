import { useState } from "react";

const QueryHeader = () => {
  const [isFollow, setIsFollow] = useState(false);
  return (

    <div className=" border-b-2 w-[600px] flex justify-between">
    <div className="flex h-[70px] w-[600px] items-center gap-4">
    <img
      src="/profilePic.png"
      alt=""
      className="h-[50px] w-[50px] rounded-[50%] ml-[30px] mt-[10px]"
    />
    <span className="text-center mt-[8px] text-2xl">Username</span>
  </div>

  <button className="text-2xl mt-[10px] mr-[30px]"
  onClick={() => setIsFollow(!isFollow)}>
    {isFollow ? "UnFollow" : "Follow"}
  </button>

  </div>
  )
}
export default QueryHeader