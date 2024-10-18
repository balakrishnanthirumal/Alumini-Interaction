import { useState } from "react";
import { useSelector } from "react-redux";
import useFollowUser from "../../CommonHooks/useFollowUser";
import useGetUserProfileById from "../../CommonHooks/useGetUserProfileById";
const QueryHeader = ({query}) => {
  const {userProfile}= useGetUserProfileById(query?.createdBy)
  const {isUpdating, handleFollowUser, isFollowing} = useFollowUser(query?.createdBy)
  return (

    <div className=" border-b-2 w-[600px] flex justify-between">
    <div className="flex h-[70px] w-[600px] items-center gap-4">
    <img
      src={userProfile?.profilePicURL ? userProfile?.profilePicURL : "/profilePic.png"}
      alt=""
      className="h-[50px] w-[50px] rounded-[50%] ml-[30px] mt-[10px]"
    />
    <span className="text-center mt-[8px] text-2xl">{userProfile?.username}</span>
  </div>

  <button className="text-2xl mt-[10px] mr-[30px]"
  onClick={handleFollowUser}>
    { isUpdating ? "Updating..." :
    isFollowing ? "UnFollow" : "Follow"}
  </button>

  </div>
  )
}
export default QueryHeader