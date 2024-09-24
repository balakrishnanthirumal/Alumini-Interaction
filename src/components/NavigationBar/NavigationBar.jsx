const NavigationBar = () => {
  return (
    <nav className="h-[50px] pt-[30px]">
      <ul className="list-none flex gap-[50px]  justify-end mr-[80px]">
        <li className="list-none  font-bold cursor-pointer">Home</li>
        <li className="list-none  font-bold cursor-pointer">Profile</li>
        <li className="list-none  font-bold cursor-pointer">Feed</li>
        <li className="list-none  font-bold cursor-pointer">Queries</li>
      </ul>
    </nav>
  );
};
export default NavigationBar;
