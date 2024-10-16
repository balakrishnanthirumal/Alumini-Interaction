import { useState } from "react";
import useSignUpWithEmail from "../../CommonHooks/useSignUpWithEmail";

const AluminiRegister = () => {
  const [aluminiData, setAluminiData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    domainKnowledge: "",
    organisatioName: "",
    location: "",
    desigination: "",
    batch: "",
    isAlumini: true,
  });

  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, signup } = useSignUpWithEmail();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(aluminiData);
  };
  return (
    <div className="bg-[#BFC7EE] h-[900px] w-full flex flex-col items-center">
      <h1 className="text-3xl mt-[50px]">Registration</h1>
      <div className="bg-[#8e9be5] h-auto w-[600px] flex flex-col items-center mt-[20px] pb-[30px]">
        <h2 className="text-2xl mt-[30px] mb-[30px]">Alumini</h2>
        <form
          className="mt-[20px] flex  flex-col justify-center items-center gap-[20px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            value={aluminiData.name}
            className="w-[300px] h-[40px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({ ...aluminiData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="User Name"
            value={aluminiData.username}
            className="w-[300px] h-[40px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({ ...aluminiData, username: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={aluminiData.email}
            className="w-[300px] h-[40px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({ ...aluminiData, email: e.target.value })
            }
          />
          <div className=" w-[300px] bg-[#fff] rounded-[10px]">
            <input
              type={showPassword ? "text" : "password"}
              value={aluminiData.password}
              placeholder="Password:"
              className="rounded-[10px] h-[40px] w-[250px] pl-3 outline-none"
              onChange={(e) =>
                setAluminiData({ ...aluminiData, password: e.target.value })
              }
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Domain Knowledge"
            value={aluminiData.domainKnowledge}
            className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({
                ...aluminiData,
                domainKnowledge: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Organisation Name you work for"
            value={aluminiData.organisatioName}
            className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({
                ...aluminiData,
                organisatioName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Designation"
            value={aluminiData.desigination}
            className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({
                ...aluminiData,
                desigination: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Which place you are working at"
            value={aluminiData.location}
            className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({
                ...aluminiData,
                location: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Batch"
            value={aluminiData.batch}
            className="h-[40px] w-[300px] rounded-[10px] align-middle pl-3 outline-none"
            onChange={(e) =>
              setAluminiData({ ...aluminiData, batch: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-auto h-[40px] rounded-[10px]  mt-[30px] bg-[#8e9be5] text-white  border-solid border-2 pl-3 pr-3"
            onClick={() => signup(aluminiData)}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AluminiRegister;
