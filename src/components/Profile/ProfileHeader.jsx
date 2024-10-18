import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useGetUserProfileByUsername from "../../CommonHooks/useGetUserProfileByUsername";
import AluminiEditProfile from "./AluminiEditProfile";
import StudentEditProfile from "./StudentEditProfile";
import useFollowUser from "../../CommonHooks/useFollowUser";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useParams();
  const { isLoading, userProfile, refetch: refreshProfile } = useGetUserProfileByUsername(username); 

  const authUser = useSelector((state) => state.auth.user);

  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);
  const visitingOwnProfile = authUser && authUser.username === userProfile?.username;
  const visitingAnotherProfile = authUser && authUser.username !== userProfile?.username;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !userProfile && <UserNotFound />}
      {!isLoading && userProfile && (
        <div className={`h-[${userProfile?.isAlumini ? "500px" : "450px"}] w-full relative`}>
          <div className={userProfile?.isAlumini ? "alumni-header h-[300px] w-full" : "student-header h-[300px] w-full"}>
            <div className="profile-pic-container h-[250px] w-[250px] rounded-full flex items-center justify-center mx-auto mt-4 overflow-hidden">
              <img
                src={userProfile.profilePicURL || "/profilePic.png"}
                alt="Profile Picture"
                className="h-[250px] w-[250px] rounded-full bg-[#fff] object-contain z-10"
              />
            </div>
            <div className="flex flex-col items-center mt-6 mb-[20px]">
              <h2 className="text-4xl">@{userProfile?.username}</h2>
              {visitingAnotherProfile && (
                <button
                  className="text-2xl mt-[10px] bg-[#ffffff] border-2 border-[#FA8A8A] rounded-[10px] px-[20px] py-[10px] text-[#FA8A8A] hover:bg-[#FA8A8A] hover:text-[#fff] transition mb-[15px]"
                  onClick={handleFollowUser}
                >
                  {isUpdating ? "Updating..." : isFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
              {visitingOwnProfile && (
                <button
                  className="text-2xl mt-[10px] bg-[#ffffff] border-2 border-[#FA8A8A] rounded-[10px] px-[20px] py-[10px] text-[#FA8A8A] hover:bg-[#FA8A8A] hover:text-[#fff] transition mb-[15px]"
                  onClick={onOpen}
                >
                  Edit Profile
                </button>
              )}
              <p className="text-xl">Name: {userProfile?.name}</p>
              <p className="text-xl">Status: {userProfile?.isAlumini ? "Alumni" : "Student"}</p>
              <p className="text-xl">Domain: {userProfile?.domainKnowledge}</p>
              {userProfile?.isAlumini && (
                <>
                  <p className="text-xl">Working at: {userProfile?.organisationName}</p>
                  <p className="text-xl">Location: {userProfile?.location}</p>
                  <p className="text-xl">Designation: {userProfile?.designation}</p>
                </>
              )}
              <div className="flex gap-10 mt-4">
                <div className="flex flex-col items-center gap-3 absolute top-[232px] left-[282px]">
                  <h1 className="text-5xl">{userProfile?.followers?.length}</h1>
                  <h1 className="text-3xl">OBSERVER</h1>
                </div>
                <div className="flex flex-col items-center gap-3 absolute top-[232px] right-[290px]">
                  <h1 className="text-5xl">{userProfile?.following?.length}</h1>
                  <h1 className="text-3xl">OBSERVING</h1>
                </div>
              </div>
            </div>
            {isOpen &&
              (userProfile?.isAlumini ? (
                <AluminiEditProfile isOpen={isOpen} onClose={onClose} refreshProfile={refreshProfile} /> // Pass refreshProfile callback
              ) : (
                <StudentEditProfile isOpen={isOpen} onClose={onClose} refreshProfile={refreshProfile} /> // Pass refreshProfile callback
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileHeader;

const UserNotFound = () => (
  <div className="bg-[#FA8A8A] h-auto w-full">
    <section className="mt-[40px] pb-[20px]">
      <div className="text-[36px] w-[153px] h-[44px] mx-auto">USER NOT FOUND</div>
    </section>
  </div>
);
