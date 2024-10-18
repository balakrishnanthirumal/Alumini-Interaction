import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

import PostCard from "../../components/PostCard/PostCard";
import CreatePost from "../../components/NavigationBar/createPost";
import useGetFeedPosts from "../../CommonHooks/useGetFeedPosts";
import { useSelector } from "react-redux";

const FeedPage = () => {

  const authUser = useSelector((state) => state.auth.user);
  const {isLoading, posts} =  useGetFeedPosts()
  return (
    <div className="bg-[#FA8A8A] min-h-[100vh] max-h-max w-full">
      <NavigationBar className="fixed " />

      <div className="feed-nav h-[90px]  mt-4 flex items-center justify-between px-[100px] border-b-2 pb-4">
        <div className="text-center text-4xl  ml-[600px]">Feed</div>

        <div className="feed-nav-item flex gap-[20px]">
          <CreatePost/>
          <div>
            <IoMdNotifications className="text-2xl" />
          </div>
          <div>
            <FaRegStar className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="mt-[50px] h-auto w-full flex flex-col items-center  py-[50px]">

        {authUser.following.length === 0 && 
          <div className="text-3xl">Looks like you dont have any friend go and follow someone 😉</div>}
       {
         !isLoading ? posts.length > 0 && posts.map((post) => <PostCard key={post.id} post={post} />) :<div className="text-3xl">Loading.....</div>
       }

      </div>
        
    </div>
  );
};

export default FeedPage;
