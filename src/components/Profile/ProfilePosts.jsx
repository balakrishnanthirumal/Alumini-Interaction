import PostCard from "../PostCard/PostCard"
import QueryCard from "../QueryCard/QueryCard"

const ProfilePosts = ({isPost}) => {
 const {isLoading, posts} =  useGetUserPost()
 const {isUpdating, queries} =  useGetUserQuery()
 const noPostFound = !isLoading && posts.length === 0
 const noQueryFound = !isUpdating && queries.length === 0

  return (
    <div className="mt-[100px] flex flex-col justify-center items-center h-auto w-full">
    {isPost ? (
      <>
        <PostCard />
        <PostCard />
        <PostCard />
      </>
    ) : (
      <>
        <QueryCard />
        <QueryCard />
        <QueryCard />
      </>
    )}
  </div>
  )
}
export default ProfilePosts