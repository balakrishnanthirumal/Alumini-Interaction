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
          HOME
          </Link>
          </li>
          <li className="list-none  font-bold cursor-pointer">
          <Link to = '/search'>
          SEARCH
          </Link>
          </li>
        <li className="list-none  font-bold cursor-pointer">
        <Link to={`/${authUser?.username}`}>PROFILE</Link>

          </li>
        <li className="list-none  font-bold cursor-pointer">
          <Link to = '/feed'>
          FEED
          </Link>
          </li>
        <li className="list-none  font-bold cursor-pointer">
          <Link to ='/queryfeed'>
          QUERIES
          </Link>
          </li>

          <li className="list-none  font-bold cursor-pointer">
          {authUser ? (
            <button onClick={handleLogout}>LOGOUT</button>
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
