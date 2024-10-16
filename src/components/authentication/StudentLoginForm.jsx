import { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import useLogin from "../../CommonHooks/useLogin";

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const {loading, error, loginIn} = useLogin();
  return (
    <div className="bg-[#BFC7EE] h-screen flex flex-col items-center ">
      <h2 className="text-3xl mt-[50px]">Student</h2>

      <div className=" bg-[#A0ADF3] h-[500px] w-[400px] mt-[100px] flex flex-col justify-center items-center">
        <h3 className="text-2xl text-center mt-6 w">SignUp</h3>
        <form
          className="mt-[100px] flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-[20px] ">
            <input
              type="text"
              value={setInputs.email}
              placeholder="Email ID:"
              className="
                        w-[280px] 
                        h-[40px]
                        rounded-[10px]
                        align-middle
                        pl-3
                        outline-none
                        "
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <div className=" w-[280px] bg-[#fff] rounded-[10px]">
              <input
                type= {showPassword ? "text" : "password"}
                value={setInputs.password}
                placeholder="Password:"
                className="rounded-[10px] h-[40px] w-[250px] pl-3 outline-none"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault(); 
                  setShowPassword(!showPassword);
                }}
              >
                <i className="fa-solid fa-eye"></i>
              </button>
            </div>
            {error && <p className="text-[#f00]">{error.message}</p>}
            <button
              type="submit"
              className="bg-[#D9D9D9] h-[40px] w-[100px] mt-[40px] m-auto rounded-[10px]"
              onClick={() => loginIn(inputs)} 
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
        <Link to="/studentregistration">
          <button
            type="submit"
            className="bg-[#A0ADF3] h-[50px] w-[100px] mt-[40px] border-solid border-[1px] rounded-[10px]"
          >
            Create Account
          </button>
        </Link>
      </div>
    </div>
  );
};
export default LoginForm;
