const QueryContent = ({queries}) => {
  return (
    <>
    <div className="ml-[30px] mt-[] h-auto pt-[30px] text-[25px]">QUESTION:</div>
    <p className="ml-[80px] mt-[]  text-ellipsis h-auto break-words text-[20px]">
      {queries.caption}
    </p>
    </>
  )
}
export default QueryContent