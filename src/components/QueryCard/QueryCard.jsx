import { Link } from "react-router-dom"
import QueryContent from "./QueryContent"
import QueryFooter from "./QueryFooter"
import QueryHeader from "./QueryHeader"
import useQueryAnswer from "../../CommonHooks/useGetQueryAnswer"

const QueryCard = () => {
  return (
    <>
     <div className="query-card h-auto w-[600px] bg-[#D9D9D9] pb-3 pr-[30px] mb-[50px] border-2 border-solid">
    
    <QueryHeader/>
    <Link to="/username/queryId">
    <QueryContent/>
    </Link>
    <QueryFooter/>
   
    </div>
    </>
  )
}
export default QueryCard