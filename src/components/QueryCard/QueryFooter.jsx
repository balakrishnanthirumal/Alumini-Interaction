const QueryFooter = ({queries}) => {
  return (
    <div className="mt-[10px] ml-[30px] flex gap-5 h-auto">
    <div className="flex gap-2">
      <div>
        <i className="fa-regular fa-thumbs-up text-2xl cursor-pointer"></i>
      </div>
      {/* <p className="mt-[5px]">{queries.likes.length}</p> */}
    </div>
    </div>
   
  )
}
export default QueryFooter