import { useState } from "react";

const StudentRegistration = () => {

  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    password: "",
    domain: "",
    otherDomain: {
      other1: "",
      other2: "",
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentData);
  }
  return (

    <div className="bg-[#BFC7EE] h-screen w-full flex flex-col items-center">
      <h1 className="text-3xl mt-[50px]">Registration</h1>
      <div className="bg-[#8e9be5] h-[600px] w-[600px] flex flex-col items-center mt-[20px]">
        <h2 className="text-2xl mt-[30px] mb-[30px]">Student</h2>
        <form className="mt-[20px] flex  flex-col justify-center items-center gap-[20px]"
        onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Name" 
          value = {studentData.name}
          className="w-[300px] h-[40px] rounded-[10px] align-middle pl-3"
          onChange={e => setStudentData({...studentData, name: e.target.value})}
          />
          <input 
          type="text" 
          placeholder="Email" 
          value={studentData.email}
          className="w-[300px] h-[40px] rounded-[10px] align-middle pl-3"
          onChange={e => setStudentData({...studentData, email: e.target.value})}
          />
          <input 
          type="text" 
          placeholder="Password" 
          value={studentData.password}
          className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3"
          onChange={e => setStudentData({...studentData, password: e.target.value})}
          />
          <input 
          type="text" 
          placeholder="Interested Domain" 
          value={studentData.domain}
          className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3"
          onChange={e => setStudentData({...studentData, domain: e.target.value})}
          />
          <input 
          type="text" 
          placeholder="Other Interested domain" 
          value={studentData.otherDomain}
          className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3"
          onChange={e => setStudentData({...studentData, otherDomain: e.target.value})}
          />

          <button
          type="submit"
          className="w-auto h-[40px] rounded-[10px]  mt-[30px] bg-[#8e9be5] text-white  border-solid border-2 pl-3 pr-3"
          ><h2 className="">Register</h2></button>
          
        </form>
      </div>
    </div>
  );
};
export default StudentRegistration;
