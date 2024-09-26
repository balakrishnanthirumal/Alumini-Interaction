import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const SearchPage = () => {
  const [search, setSearch] = useState({
    search: "",
    organisation: "",
    domain: "",
    location: "",
    designation: "",
  });

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="bg-[#FA8A8A] h-[1300px]">
        <NavigationBar />
        <div
          className="rounded-[10px] h-[40px] w-[250px] bg-[#fff]
           text-center flex items-center justify-center gap-3 ml-[100px] mt-[50px]"
        >
          <CiSearch className="scale-[1.5]" />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none"
            value={search.search}
            onChange={(e) => setSearch({ ...search, search: e.target.value })}
          />
        </div>

        <div className="ml-[100px] mt-[100px]">
          <h1 className="text-3xl mb-2 ml-9">Filters</h1>
          <div className="inputBox-Section flex justify-evenly">
            <div className="organisation">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.organisation} // Bind value to state
                onChange={(e) => setSearch({ ...search, organisation: e.target.value })}
              >
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Wells Fargo">Wells Fargo</option>
              </select>
            </div>

            <div className="domain">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.domain} // Bind value to state
                onChange={(e) => setSearch({ ...search, domain: e.target.value })}
              >
                <option value="Web Developer">Web Developer</option>
                <option value="App Developer">App Developer</option>
                <option value="SOC Analyst">SOC Analyst</option>
              </select>
            </div>

            <div className="location">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.location} // Bind value to state
                onChange={(e) => setSearch({ ...search, location: e.target.value })}
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            <div className="designation">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.designation} 
                onChange={(e) => setSearch({ ...search, designation: e.target.value })}
              >
                <option value="Junior Software Engineer">Junior Software Engineer</option>
                <option value="Manager">Manager</option>
                <option value="HR">HR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="Search-results mt-[200px] ml-[150px] max-w-[1200px] max-h-[700px] min-h-5 grid grid-cols-3 mx-auto overflow-y-auto gap-8 align-middle pl-[80px]">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
