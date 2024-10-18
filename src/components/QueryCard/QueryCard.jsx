import { Link } from "react-router-dom"
import QueryContent from "./QueryContent"
import QueryFooter from "./QueryFooter"
import QueryHeader from "./QueryHeader"
import useQueryAnswer from "../../CommonHooks/useGetQueryAnswer"

const QueryCard = ({query}) => {
  return (
    <>
     <div className="query-card h-auto w-[600px] bg-[#D9D9D9] pb-3 pr-[30px] mb-[50px] border-2 border-solid">
    
    <QueryHeader query={query}/>
    <Link to={`/query/${query.id}`}>
    <QueryContent query={query}/>
    </Link>
   
    </div>
    </>
  )
}
export default QueryCard