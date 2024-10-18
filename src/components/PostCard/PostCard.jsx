import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const PostCard = () => {
  return (
      <div className="post-card w-[600px] rounded-[10px] mb-[50px] min-h-[500px] bg-[#AAC490]">
        <PostHeader />

        <PostContent />

        <PostFooter />
      </div>
    
  );
};
export default PostCard;
