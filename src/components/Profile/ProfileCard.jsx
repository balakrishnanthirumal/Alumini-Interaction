const ProfileCard = () => {
  return (
    <>
      <div className="relative bg-[#fff] rounded-[10px] h-[338px] w-[296px] flex flex-col justify-center ">
        <div className="absolute mt-[20px] rounded-[10px] h-[500px] w-[800px] align-middle inline-block mx-auto top-4 left-[100px] ">
          <img src="/profilePic.png" className="h-[100px] w-[100px]" />
        </div>

        <div className="  text-center  mt-[120px]">Name</div>
        <div className="  text-center  mt-2">Designation</div>
        <div className="  text-center  mt-2">Domain</div>
        <div className="  text-center  mt-2">Organisation</div>
      </div>
    </>
  );
};
export default ProfileCard;
