import { useState } from "react";
import Commented from "./Comment";
import usePostComment from "../../CommonHooks/usePostComment";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { BiLike } from "react-icons/bi";
import useLikePost from "../../CommonHooks/useLikePost";
import { BiSolidLike } from "react-icons/bi";

const PostFooter = ({ post }) => {
  const [commentCaption, setCommentCaption] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState(post.comments); // Initialize with post's current comments
  const { isCommenting, handlePostComment } = usePostComment();
  const { handleLikePost, likes, isLiked } = useLikePost(post); 
  const authUser = useSelector((state) => state.auth.user);

  const handleSubmitComment = async () => {
    if (!commentCaption.trim()) return;
    await handlePostComment(post.id, commentCaption);
    
    setComments((prevComments) => [
      ...prevComments,
      { id: nanoid(), text: commentCaption, createdBy: authUser.username }
    ]);
    setCommentCaption("");
  };

  return (
    <>
      <div className="flex gap-4 mt-3">
        <div className="flex gap-1 ml-3 cursor-pointer">
          <div onClick={handleLikePost}>
            {isLiked ? <BiSolidLike className="text-2xl" /> : <BiLike className="text-2xl" />}
          </div>
          <p>{likes}</p>
        </div>

        <div className="flex gap-1">
          <div onClick={() => setShowComment(!showComment)}>
            <i className="fa-solid fa-comment fa-lg cursor-pointer"></i>
          </div>
          <p>{comments.length}</p>
        </div>
      </div>
      <hr className="mt-2" />
      {authUser && (
        <div className="bg-[#D9D9D9] p-3 h-[30px] w-[80%] flex items-center rounded-md mt-3 ml-[10px]">
          <input
            placeholder="Add a comment"
            type="text"
            value={commentCaption}
            onChange={(e) => setCommentCaption(e.target.value)}
            className="w-[100%] h-[25px] outline-none bg-[#D9D9D9] border-none"
          />

          <button
            onClick={handleSubmitComment}
            className="border-solid border-[1px] ml-2 px-[5px] rounded-sm text-[10px]"
          >
            {isCommenting ? "Commenting..." : "Comment"}
          </button>
        </div>
      )}

      {showComment && <CommentSkeleton comments={comments} />}
    </>
  );
};
export default PostFooter;

const CommentSkeleton = ({ comments }) => {
  return (
    <>
      <div className="ml-3 mt-3">
        <p className="mb-2">Comments</p>

        <div className="overflow-y-auto max-h-[200px]">
          {comments.map((comment) => (
            <Commented key={nanoid()} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
};
