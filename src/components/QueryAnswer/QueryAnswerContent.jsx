const QueryAnswerContent = () => {
  return (
    <main className="mt-[50px] w-[80%] mx-auto bg-[#D9D9D9] h-auto border-2 pt-[20px] pb-[20px]">
    <div className=" h-[auto] flex flex-col ">
      <p className="ml-[30px] break-words text-[25px]">
        Answer 1:&nbsp;&nbsp;&nbsp;How to survive in the life and how to
        not suffer in the life and how to satisfies in the life
      </p>
      <div className="mt-[10px] ml-[100px] flex gap-9 h-auto">
        <div className="flex gap-2">
          <div>
            <i className="fa-regular fa-thumbs-up text-3xl"></i>
          </div>
          <p className="mt-[5px]">100</p>
        </div>

        <div className="flex gap-2">
          <div>
            <i className="fa-regular fa-comment text-3xl"></i>
          </div>
          <p className="mt-[5px]">100</p>
        </div>
      </div>
    </div>
  </main>
  )
}
export default QueryAnswerContent