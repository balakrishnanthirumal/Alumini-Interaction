import useGetUserPost from "../../CommonHooks/useGetUserPosts"
import PostCard from "../PostCard/PostCard"
import QueryCard from "../QueryCard/QueryCard"
import useGetUserQuery from "../../CommonHooks/useGetUserQuery"
const ProfilePosts = ({isPost}) => {
 const {isLoading, posts} =  useGetUserPost()
 const {isUpdating, queries} =  useGetUserQuery()
 const noPostFound = !isLoading && posts.length === 0
 const noQueryFound = !isUpdating && queries.length === 0
  console.log(queries)
  return (
    <div className="mt-[100px] flex flex-col justify-center items-center h-auto w-full">
    {isPost ? (
      noPostFound ? <div className="text-3xl">No Posts Found </div> :
      
      isLoading ? <div className="text-3xl">Loading.....</div> :
      posts.map((post) => <PostCard key={post.id} post={post} />)
    ) : (
      noQueryFound ? <div className="text-3xl">No Queries Found </div> :
      isLoading ? <div className="text-3xl">Loading.....</div> :
      queries.map((query) => <QueryCard key={query.id} query={query} />)
     
    )}
  </div>
  )
}
export default ProfilePosts