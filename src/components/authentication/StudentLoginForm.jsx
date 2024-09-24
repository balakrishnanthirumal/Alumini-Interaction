import { useState } from "react"
import "./LoginForm.css"
import { Link } from "react-router-dom"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
      return (


    <div className="bg-[#BFC7EE] h-screen flex flex-col items-center ">
        <h2 className="text-3xl mt-[50px]">Student</h2>
        

            <div className=" bg-[#A0ADF3] h-[500px] w-[400px] mt-[100px] flex flex-col justify-center items-center">
                <h3 className="text-2xl text-center mt-6 w">SignUp</h3>
                <form  className="mt-[100px] flex justify-center items-center" 
                onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[20px] ">
                        <input 
                        type="text" 
                        value = {email} placeholder="Email ID:"
                        className="
                        w-[250px] 
                        h-[40px]
                        rounded-[10px]
                        align-middle
                        pl-3
                        
                        "
                        onChange={(e) => setEmail(e.target.value)}
                        />

                        <input 
                        type="password" 
                        value = {password} placeholder="Password:"
                        className="rounded-[10px] h-[40px] w-[250px] pl-3"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <button type="submit" className="bg-[#D9D9D9] h-[40px] w-[100px] mt-[40px] m-auto rounded-[10px]">Submit</button>

                    </div>


            
                </form>
                <Link to="/studentregistration">
                <button type="submit" className="bg-[#A0ADF3] h-[50px] w-[100px] mt-[40px] border-solid border-[1px] rounded-[10px]">Create Account</button>
                </Link>
            </div>

        
    </div>
  )
}
export default LoginForm