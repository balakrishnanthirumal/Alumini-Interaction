import "./LoginRegister.css"
import { Link } from "react-router-dom"
const LoginRegister = () => {


  return (
    <div className="body">
        <div>
            <h1 className="heading text-3xl align-middle text-center">Welcome to Alumini Association </h1>
            <div className="button">
                <Link to="/studentlogin">
                <button >Student</button>
                </Link>
                <Link to="/aluminilogin">
                <button >Alumini</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
export default LoginRegister;