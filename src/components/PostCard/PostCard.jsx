import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

const PostCard = () => {
  return (
      <div className="post-card w-[600px] rounded-[10px] mb-[50px] min-h-[450px] bg-[#AAC490]">
        <PostHeader post={post}/>

        <PostContent />

        <PostFooter />
      </div>
    
  );
};
export default PostCard;
