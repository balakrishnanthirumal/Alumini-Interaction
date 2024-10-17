<<<<<<< HEAD
import { useState } from "react";
import Commented from "./Comment";
import usePostComment from "../../CommonHooks/usePostComment";
import { useRef } from "react";
import { nanoid } from "@reduxjs/toolkit";


const PostFooter = ({post}) => {


  const [commentCaption, setCommentCaption] = useState("");
  const [showComment, setShowComment] = useState(false);
  const {isCommenting, handlePostComment} = usePostComment();
  const handleSubmitComment = async() => {
    await handlePostComment(post.id, commentCaption);
    setCommentCaption("");
}

=======
const PostFooter = () => {
>>>>>>> parent of 89bbaa5 (Done)
  return (
    <>
    <div className="flex gap-4 mt-3">
    <div className="flex gap-1 ml-3">
      <div>
        <i className="fa-solid fa-thumbs-up fa-lg cursor-pointer"></i>
      </div>
      <p>100</p>
    </div>

    <div className="flex gap-1">
      <div onClick={() => setShowComment(!showComment)}>
        <i className="fa-solid fa-comment fa-lg cursor-pointer"></i>
      </div>
      <p>100</p>
    </div>

  </div>
  <hr className="mt-2"/>
  <div className="bg-[#D9D9D9] p-3 h-[30px] w-[80%] flex items-center rounded-md mt-3 ml-[10px]">
      <input placeholder="Add a comment" type="text" value= {commentCaption} onChange={(e) => setCommentCaption(e.target.value) }
      className="w-[100%] h-[25px] outline-none bg-[#D9D9D9] border-none "
      />

      <button onClick={handleSubmitComment} className="border-solid border-[1px] ml-2 px-[5px] rounded-sm text-[10px]"
        >{isCommenting ? "Commenting..." : "Comment"}</button>
      </div>

    {showComment && <CommentSkeleton post={post}/>}
  


  <div className="ml-3 mt-2 cursor-pointer">
    <p>View all comments</p>
  </div>
  </>
  )
}
export default PostFooter

const CommentSkeleton = ({post}) => {
  return (
    <>
    <div className="ml-3 mt-3">
      <p className="mb-2">Comments</p>
     

      <div className="overflow-y-auto max-h-[200px]">
        {post.comments.map((comment) => (
          <Commented key={nanoid()} comment={comment} />
        ))}

        
      </div>
      </div>
    </>
  )
}

