const HomePage = () => {
  return (
    <div className="relative">
        <img src="/EECbuilding.png" alt="" className="h-[600px] w-full filter grayscale-[50%] " />
        <img src="/EEClogo.png" className="absolute top-4 left-[15px] h-[150px] mt-[50px] ml-[50px]"/>
        <ul className="absolute top-[50px] right-[100px] flex gap-[50px]">
            <li className="list-none text-2xl font-bold">Home</li>
            <li className="list-none text-2xl font-bold">About</li>
            <li className="list-none text-2xl font-bold">Profile</li>
            <li className="list-none text-2xl font-bold">Feed</li>
            <li className="list-none text-2xl font-bold">Queries</li>
            <li className="list-none text-2xl font-bold">SignIn/SignUp</li>
        </ul>

        <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 translate-x-[-50%] translate-y-[-50%] text-7xl w-[1307px] ml-[40px] text-[#D01515] font-bold"><h1>Welcome to EEC Alumini Association</h1></div>
    </div>
  )
}
export default HomePage