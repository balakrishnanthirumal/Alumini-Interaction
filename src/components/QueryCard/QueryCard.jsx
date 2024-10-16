import { Link } from "react-router-dom"
import QueryContent from "./QueryContent"
import QueryFooter from "./QueryFooter"
import QueryHeader from "./QueryHeader"

const QueryCard = ({query}) => {
  return (
    <>
     <div className="query-card h-auto w-[600px] bg-[#D9D9D9] pb-3 pr-[30px] mb-[50px] border-2 border-solid">
    
    <QueryHeader queries={query}/>
    <Link to="/username/queryId">
    <QueryContent queries={query}/>
    </Link>
    <QueryFooter queries={query}/>
   
    </div>
    </>
  )
}
export default QueryCard