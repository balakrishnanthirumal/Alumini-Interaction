import PostCard from "../../components/PostCard/PostCard"

const ProfilePage = () => {
  return (
    <section className="bg-[#FA8A8A] min-h-[1024px] max-h-auto w-full pb-[100px]">

        <div className=" h-[382px] w-full relative ">
            <div className=" profile-pic-container  h-[250px] w-[250px] rounded-[50%] ml-[500px] flex items-center justify-center translate-x-[50%] mt-4 overflow-hidden absolute ">
            <img src="/profilePic.png" className="h-[250px] w-[250px] rounded-[50%] object-contain"/>
            </div>

            <div className="flex gap-4 justify-around items-center pb-[300px] h-auto  w-full ">
                <div className="flex flex-col items-center gap-3 pb-4 absolute top-[232px] left-[282px] bottom-[100px]
                ">
                    <h1 className="text-5xl">120</h1>
                    <h1 className="text-3xl">OBSERVER</h1>
                </div>
                <div className="text-4xl top-[290px] absolute mr-10 ">
                    Full Name
                </div>
                <div className="flex flex-col items-center gap-3 pb-4 absolute top-[232px]  right-[307px]">
                    <h1 className="text-5xl">300</h1>
                    <h1 className="text-3xl">OBSERVING</h1>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center h-[100px] w-full gap-[300px] border-b-2 border-t-2">
            <div className="text-3xl border-solid border-2 px-[40px] py-[10px] rounded-[40px] bg-[#8ED447]">Posts</div>
            <div className="text-3xl border-solid border-2 px-[40px] py-[10px] rounded-[40px] bg-[#8ED447]">Queries</div>
        </div>

    <div className="mt-[50px] flex justify-center items-center h-auto w-full">
        <PostCard/>
    </div>

    </section>
  )
}
export default ProfilePage