import useGetUserProfileById from "../../CommonHooks/useGetUserProfileById"
import { Link } from "react-router-dom"

const Commented = ({comment}) => {
  const {userProfile, isLoading} = useGetUserProfileById(comment.createdBy)

  if(isLoading) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="border-solid border-[1px] mt-[20px]
    w-[80%] min-h-[40px] rounded-md bg-[#D9D9D9]">
        <div className="flex items-center mt-[5px] ml-[10px]">
          <Link to ={`/${userProfile?.username}`}>
            <img src={userProfile?.profilePicURL? userProfile?.profilePicURL : '/profilePic.png'} alt="" className="h-[25px] w-[25px] rounded-[50%] inline-block"/>
          </Link>
            <p className="inline-block ml-1 font-medium">{userProfile?.username}</p>

            <p className="ml-2 text-[13px]">{comment.comment}</p>
        </div>

        
    </div>
  )
}
export default Commented