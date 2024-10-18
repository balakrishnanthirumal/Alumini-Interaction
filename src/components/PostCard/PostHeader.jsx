import { useSelector } from "react-redux";
import useGetUserProfileById from "../../CommonHooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import useFollowUser from "../../CommonHooks/useFollowUser";
const PostHeader = ({post}) => {

  const {handleFollowUser, isFollowing, isUpdating } = useFollowUser(post?.createdBy)


  const {userProfile} = useGetUserProfileById(post?.createdBy)
  return (
    <div className="flex justify-between items-center pt-[25px] pr-4">
      <div className="flex gap-4 items-center">
      <Link to={`/${userProfile?.username}`}>
        <div className="img-container h-[50px] ml-[20px] flex gap-4 items-center">
          
          <img
            src={userProfile?.profilePicURL ? userProfile?.profilePicURL : "/profilePic.png"}
            alt="Profile Picture"
            className="h-[60px] w-[60px] object-contain rounded-[50%]"
          />
          <h1 className="text-2xl font-medium ">{userProfile?.username}</h1>

        </div>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-xl text-[#0079D3]  " onClick={handleFollowUser}>
          {
            isUpdating ? "Updating..." :
          
          isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};
export default PostHeader;
