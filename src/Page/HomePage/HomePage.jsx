import useLogOut from "../../CommonHooks/useLogOut";

const HomePage = () => {
  const {handleLogout, loading, error} = useLogOut();
  return (
    <div className="relative">
        <img src="/EECbuilding.png" alt="" className="h-[600px] w-full filter grayscale-[50%] ob" />
        <img src="/EEClogo.png" className="absolute top-4 left-[15px] h-[150px] mt-[50px] ml-[50px]"/>
        <ul className="absolute top-[50px] right-[100px] flex gap-[50px]">
            <li className="list-none text-2xl font-bold cursor-pointer">Home</li>
            <li className="list-none text-2xl font-bold cursor-pointer">About</li>
            <li className="list-none text-2xl font-bold cursor-pointer">Profile</li>
            <li className="list-none text-2xl font-bold cursor-pointer">Feed</li>
            <li className="list-none text-2xl font-bold cursor-pointer">Queries</li>
            <li className="list-none text-2xl font-bold cursor-pointer"
            >
              <button onClick={handleLogout}>
              LogOut

              </button>

            </li>
        </ul>

        <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 translate-x-[-50%] translate-y-[-50%] text-7xl w-[1307px] ml-[40px] text-[#D01515] font-bold"><h1>Welcome to EEC Alumini Association</h1></div>
    </div>
  )
}
export default HomePage