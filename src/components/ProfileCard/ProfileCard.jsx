import { Link } from "react-router-dom";
import useFollowUser from "../../CommonHooks/useFollowUser";

const ProfileCard = ({ user }) => {
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user?.uid);

  return (
    <div className="relative bg-[#fff] rounded-[10px] h-[400px] w-[296px] flex flex-col justify-center ">
        <div className="absolute mt-[20px] rounded-[10px] h-[500px] w-[800px] align-middle inline-block mx-auto top-4 left-[100px]">
          <Link to={`/${user.username}`}>
          <img
            src={user.profilePicURL || "/profilePic.png"}
            alt="Profile"
            className="h-[100px] w-[100px] object-contain
        "
          />
          </Link>
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
