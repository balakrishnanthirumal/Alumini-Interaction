


const ProfileTab = ({isPost, setIsPost}) => {

 
  return (
    <div className="flex justify-center items-center h-[100px] w-full gap-[300px] border-b-2 border-t-2 mt-[170px]">
    <div
      className={`text-3xl border-solid border-2 px-[40px] py-[10px] rounded-[40px] ${
        isPost ? "bg-[#8ED447]" : ""
      } cursor-pointer`}
      onClick={() => setIsPost(true)}
    >
      Posts
    </div>
    <div
      className={`text-3xl border-solid border-2 px-[40px] py-[10px] rounded-[40px] ${
        !isPost ? "bg-[#8ED447]" : ""
      } cursor-pointer`}
      onClick={() => setIsPost(false)}
    >
      Queries
    </div>
  </div>
  )
}
export default ProfileTab