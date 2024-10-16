import {useState} from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTab from "../../components/Profile/ProfileTab";
import ProfilePosts from "../../components/Profile/ProfilePosts";
const ProfilePage = () => {
  const [isPost, setIsPost] = useState(true);

  

  return (
    <section className="bg-[#FA8A8A] min-h-[1024px] max-h-auto w-full pb-[100px]">
      <NavigationBar />

      <ProfileHeader />

      <ProfileTab isPost={isPost} setIsPost={setIsPost} />

      <ProfilePosts isPost={isPost} />
    </section>
  );
};

export default ProfilePage;
