import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogOut from "../../CommonHooks/useLogOut";

const NavigationBar = () => {
  const authUser = useSelector((state) => state.auth.user);
  const { handleLogout, loading, error } = useLogOut();
  
  return (
    <nav className="h-[50px] pt-[30px] border-b-2 pb-[40px]">
      <ul className="list-none flex gap-[50px]  justify-end mr-[80px]">
        <li className="list-none  font-bold cursor-pointer">
          <Link to = '/home'>
          Home
          </Link>
          </li>
        <li className="list-none  font-bold cursor-pointer">
        <Link to={`/${authUser.username}`}>Profile</Link>

          </li>
        <li className="list-none  font-bold cursor-pointer">
          <Link to = '/search'>
          Feed
          </Link>
          </li>
        <li className="list-none  font-bold cursor-pointer">
          <Link to ='/query'>
          Queries
          </Link>
          </li>

          <li className="list-none  font-bold cursor-pointer">
          {authUser ? (
            <button onClick={handleLogout}>LogOut</button>
          ) : (
            <Link to="/">
              <button>SignIn/SignUp</button>
            </Link>
          )}
        </li>
      </ul>
      
    </nav>
  );
};
export default NavigationBar;
