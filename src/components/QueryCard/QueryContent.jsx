const QueryContent = ({query}) => {
  return (
    <>
    <div className="ml-[30px] h-auto pt-[30px] text-[25px]">QUESTION:</div>
    <p className="ml-[80px] mt-[]  text-ellipsis h-auto break-words text-[20px]">
      {query.caption}
    </p>
    </>
  )
}
export default QueryContent