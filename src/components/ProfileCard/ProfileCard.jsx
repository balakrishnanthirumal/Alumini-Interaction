import { Link } from "react-router-dom";
import useFollowUser from "../../CommonHooks/useFollowUser";

const ProfileCard = ({ user }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user?.uid);

  return (
    <div className="relative bg-[#fff] rounded-[10px] h-[450px] w-[296px] flex flex-col justify-center ">
        <div className="absolute mt-[20px] rounded-[10px] h-[500px] w-[800px] align-middle inline-block mx-auto top-4 left-[100px]  flex-col items-center justify-center">
          <Link to={`/${user.username}`}>
          <img
            src={user.profilePicURL || "/profilePic.png"}
            alt="Profile"
            className="h-[100px] w-[100px] object-contain mb-[10px]
        "
          />
          </Link>

          <button onClick={handleFollowUser} className="text-2xl mt-[10px] bg-[#FA8A8A] rounded-md ml-[5px] mb-[20px] text-[#fff] px-[10px] hover:bg-[#fff] min-w-[100px] max-w-[150px] hover:text-[#FA8A8A] transition mx-auto">{ isFollowing ? "Unfollow" : "Follow"}</button>
        </div>


        
      

      <div className="text-center  mt-[120px] text-2xl">{`@${user.username}`}</div>

     
      <div className="text-center mt-2">{`Name: ${user.name}`}</div>
      <div className="text-center mt-2">{`Domain Knowledge: ${user.domainKnowledge}`}</div>
      <div className="text-center mt-2">{`Organisation: ${user.organisationName}`}</div>
      <div className="text-center mt-2">{`Location: ${user.location}`}</div>
      <div className="text-center mt-2">{`Designation: ${user.designation}`}</div>
    </div>
  );
};

export default ProfileCard;
