import { useState } from "react";
import useGetUserProfileById from "../../CommonHooks/useGetUserProfileById";
import usePostComment from "../../CommonHooks/usePostAnswer";
import { useParams } from "react-router";
import useFollowUser from "../../CommonHooks/useFollowUser";
const QueryAnswerHeader = ({queries}) => {
  const [answer, setAnswer] = useState("");
  const [isFollow, setIsFollow] = useState(false);
  const {userProfile} = useGetUserProfileById(queries?.createdBy);
  const { isCommenting, handlePostComment} = usePostComment();
  const {queryId} = useParams();
  const {isFollowing, handleFollowUser, isUpdating} = useFollowUser(queries?.createdBy);
  console.log(userProfile)
  const handleSubmit = async() => {
    await handlePostComment(queryId, answer);
    
    
    setAnswer("");
  }
  return (
    <>
      <header className="h-auto flex justify-between px-[30px] border-b-[1px]">
        <div className="flex items-center mb-[30px]">
          <img
            src= {userProfile?.profilePicURL ? userProfile?.profilePicURL : "/profilePic.png"}
            alt=""
            className="h-[80px] w-[80px] rounded-[50%] object-contain"
          />
          <h1 className="text-2xl ml-[10px] font-medium">{userProfile?.username}</h1>
        </div>
        <div className="flex items-center mb-[30px]">
          <button
            className="text-2xl mt-[10px] text-[#0079D3] "
            onClick={handleFollowUser}
          >
            {isUpdating ? "Updating..." : isFollowing ? "UnFollow" : "Follow"}
          </button>
        </div>
      </header>

      <section className="border-b-[1px]">
        <div className="ml-[30px] mt-[20px] text-[30px] break-words">
          Question:&nbsp;&nbsp;&nbsp;{queries?.caption}
        </div>
        <p className="ml-[30px] mb-[10px]">Date: 01-01-2022</p>
      </section>
      <div className="mt-[30px] h-[50px] ml-[30px] bg-[#fff] rounded-md w-[80%] flex gap-[40px] justify-center items-center pb-[8px]">
        <input
          type="text"
          className="w-[1000px] h-[35px]  mt-[10px] rounded-md  text-xl ml-4 outline-none" value={answer} onChange={(e) => setAnswer(e.target.value)}
        />

        <button
          className=" border-[1px] mr-[20px] mt-[10px] h-[35px] px-[5px] rounded-sm text-[20px] float-right" onClick={handleSubmit}
        >
          {isCommenting ? "Posting..." : "Post"}
        </button>

      </div>
    </>
  );
};
export default QueryAnswerHeader;
