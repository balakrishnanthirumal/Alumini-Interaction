import { div } from "framer-motion/client"

const Commented = ({comment}) => {
  return (
    <div className="border-solid border-[1px] mt-[20px]
    w-[80%] min-h-[50px] rounded-md bg-[#D9D9D9]">
        <div className="flex items-center mt-[5px] ml-[10px]">
            <img src="/profilePic.png" alt="" className="h-[20px] w-[20px] rounded-lg inline-block"/>

            <p className="inline-block ml-2">Username</p>
        </div>

        <p className="ml-8 text-[13px]">{comment.comment}</p>
    </div>
  )
}
export default Commented