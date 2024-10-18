import QueryCard from "../../components/QueryCard/QueryCard"

const QueryFeedPage = () => {
  return (
    <div className="bg-[#FA8A8A] h-auto w-full border-solid border-[1px]">
        <section className="mt-[40px] border-b-[1px] pb-[20px]">
            <div className="text-[36px] w-[153px] h-[44px] mx-auto">QUERIES</div>
        </section>

        <main>
            <div className="w-[750px] border-[1px] p-[10px] mx-auto mt-[80px] rounded-md bg-[#fff]">
                <input type="text" className="w-[680px] h-[60px] ml[10px] placeholder:text-2xl my-auto text-2xl outline-none" placeholder="ASK YOUR QUESTIONS"/>
               <button className="cursor-pointer"><i class="fa-solid fa-paper-plane text-2xl mr-[20px]"></i></button> 
            </div>


            <div className="w-[750px] p-[10px] mx-auto mt-[80px] rounded-md flex flex-col justify-center items-center">
            <QueryCard/>
            <QueryCard/>
            <QueryCard/>
            </div>
        </main>
    </div>
  )
}
export default QueryFeedPage