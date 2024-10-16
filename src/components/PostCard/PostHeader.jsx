import { useSelector } from "react-redux";

const PostHeader = ({post}) => {

  const authUser = useSelector((state) => state.auth.user);
  return (
    <div className="flex justify-between items-center pt-[25px] pr-4">
      <div className="flex gap-4 items-center">
        <div className="img-container h-[50px] w-[50px] rounded-full overflow-hidden ml-[20px]">
          <img
            src={authUser?.profilePicURL ? authUser?.profilePicURL : "/profilePic.png"}
            alt="Profile Picture"
            className="h-full w-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-medium">{authUser?.username}</h1>
      </div>
      <div className="flex gap-4 items-center">
        <i className="fa-solid fa-star"></i>
        <h1 className="text-2xl text-[#2b4b7f] cursor-pointer">Follow</h1>
      </div>
    </div>
  );
};
export default PostHeader;
