const PostFooter = ({post}) => {
  return (
    <>
    <div className="flex gap-4 mt-3">
    <div className="flex gap-1 ml-3">
      <div>
        <i className="fa-solid fa-thumbs-up fa-lg cursor-pointer"></i>
      </div>
      <p>{post.likes.length}</p>
    </div>

    <div className="flex gap-1">
      <div>
        <i className="fa-solid fa-comment fa-lg cursor-pointer"></i>
      </div>
      <p>{post.comments.length}</p>
    </div>
  </div>

  
  </>
  )
}
export default PostFooter