import PostCard from "../PostCard/PostCard"
import QueryCard from "../QueryCard/QueryCard"

const ProfilePosts = ({isPost}) => {
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