import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import useSearchUser from "../../CommonHooks/useSearchUser";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const SearchPage = () => {
  const [search, setSearch] = useState({
    search: "",
    organisation: "",
    domain: "",
    location: "",
    designation: "",
  });
  const [filteredUser, setFilteredUser] = useState([]);
  const { user, isLoading, getUserProfile } = useSearchUser();
  const { location, company, domain, designation } = getField();

  useEffect(() => {
    const fetchAndFilterData = async () => {
      await getUserProfile(); // Ensure data is fetched before filtering

      if (user && user.length > 0) {
        const filtered = user.filter(
          ({
            username,
            organisationName,
            location,
            domainKnowledge,
            designation,
          }) =>
            (!search.search || username.toLowerCase().includes(search.search.toLowerCase())) &&
            (!search.organisation || organisationName.toLowerCase().includes(search.organisation.toLowerCase())) &&
            (!search.location || location.toLowerCase().includes(search.location.toLowerCase())) &&
            (!search.domain || domainKnowledge.toLowerCase().includes(search.domain.toLowerCase())) &&
            (!search.designation || designation.toLowerCase().includes(search.designation.toLowerCase()))
        );
        setFilteredUser(filtered);
      }
    };

    fetchAndFilterData();
  }, [search, user]); // Add 'user' as a dependency

  return (
    <>
      <div className="bg-[#FA8A8A] h-[1300px]">
        <NavigationBar />
        <div className="rounded-[10px] h-[40px] w-[250px] bg-[#fff] text-center flex items-center justify-center gap-3 ml-[100px] mt-[50px]">
          <CiSearch className="scale-[1.5]" />
          <input
            type="text"
            placeholder="Search"
            className="border-none outline-none"
            value={search.search}
            onChange={(e) =>
              setSearch({ ...search, search: e.target.value })
            }
          />
        </div>

        <div className="ml-[100px] mt-[100px]">
          <h1 className="text-3xl mb-2 ml-9">Filters</h1>
          <div className="inputBox-Section flex justify-evenly">
            <div className="organisation">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.organisation}
                onChange={(e) =>
                  setSearch({ ...search, organisation: e.target.value })
                }
              >
                <option value="">Select organisation</option>
                {company.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>

            <div className="domain">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.domain}
                onChange={(e) => setSearch({ ...search, domain: e.target.value })}
              >
                <option value="">Select domain</option>
                {domain.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>

            <div className="location">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.location}
                onChange={(e) => setSearch({ ...search, location: e.target.value })}
              >
                <option value="">Select location</option>
                {location.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="designation">
              <select
                className="cursor-pointer border-none outline-none rounded-[7px] w-[150px] p-2"
                value={search.designation}
                onChange={(e) =>
                  setSearch({ ...search, designation: e.target.value })
                }
              >
                <option value="">Select designation</option>
                {designation.map((designation) => (
                  <option key={designation} value={designation}>
                    {designation}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="Search-results mt-[200px] ml-[150px] max-w-[1200px] max-h-[700px] min-h-5 grid grid-cols-3 mx-auto overflow-y-auto gap-8 align-middle pl-[80px]">
          {filteredUser.length > 0 &&
            filteredUser.map((user) => (
              <ProfileCard key={user.uid} user={user} />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;


const getField = () => {
  const [company, setCompany] = useState([]);
  const [location, setLocation] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [domain, setDomain] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'user');
        const q = query(collectionRef, where('isAlumini', '==', true));

        const querySnapshot = await getDocs(q);

        const companyArr = [];
        const locationArr = [];
        const designationArr = [];
        const domainArr = [];

        querySnapshot.forEach((doc) => {
          const docData = doc.data();

          if (docData.organisationName && !companyArr.includes(docData.organisationName)) {
            companyArr.push(docData.organisationName);
          }
          if (docData.location && !locationArr.includes(docData.location)) {
            locationArr.push(docData.location);
          }
          if (docData.designation && !designationArr.includes(docData.designation)) {
            designationArr.push(docData.designation);
          }
          if (docData.domainKnowledge && !domainArr.includes(docData.domainKnowledge)) {
            domainArr.push(docData.domainKnowledge);
          }
        });

        setCompany(companyArr);
        setLocation(locationArr);
        setDesignation(designationArr);
        setDomain(domainArr);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []); // Run only once when the component mounts

  return { company, location, designation, domain };
};
