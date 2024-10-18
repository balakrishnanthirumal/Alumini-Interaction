import { Navigate, Link } from "react-router-dom";
import useLogOut from "../../CommonHooks/useLogOut";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { handleLogout, loading, error } = useLogOut();
  const authUser = useSelector((state) => state.auth.user);

  // Redirect to the login page if the user is not authenticated
  const handleNavigation = (path) => {
    if (authUser) {
      return path;
    } else {
      return "/";
    }
  };

  return (
    <div className="relative">
      <img
        src="/EECbuilding.png"
        alt=""
        className="h-[600px] w-full filter grayscale-[50%]"
      />
      <img
        src="/EEClogo.png"
        className="absolute top-4 left-[15px] h-[150px] mt-[50px] ml-[50px]"
      />
      <ul className="absolute top-[50px] right-[100px] flex gap-[50px]">
        <li className="list-none text-2xl font-bold cursor-pointer">
          <Link to={handleNavigation("/home")}>HOME</Link>
        </li>
        <li className="list-none text-2xl font-bold cursor-pointer">
          <Link to={handleNavigation("/search")}>SEARCH</Link>
        </li>
       
        <li className="list-none text-2xl font-bold cursor-pointer">
          <Link to={handleNavigation(`/${authUser?.username}`)}>PROFILE</Link>
        </li>
        <li className="list-none text-2xl font-bold cursor-pointer">
          <Link to={handleNavigation("/feed")}>FEED</Link>
        </li>
        <li className="list-none text-2xl font-bold cursor-pointer">
          <Link to={handleNavigation("/queries")}>QUERIES</Link>
        </li>
        <li className="list-none text-2xl font-bold cursor-pointer">
          {authUser ? (
            <button onClick={handleLogout}>LOGOUT</button>
          ) : (
            <Link to="/">
              <button>SIGNIN/SIGNOUT</button>
            </Link>
          )}
        </li>
      </ul>

      <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 translate-x-[-50%] translate-y-[-50%] text-7xl w-[1307px] ml-[40px] text-[#D01515] font-bold">
        <h1>Welcome to EEC Alumini Association</h1>
      </div>
    </div>
  );
};

export default HomePage;
