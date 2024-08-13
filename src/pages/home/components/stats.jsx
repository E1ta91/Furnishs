const Stats = () => {
  return (
    <div className="pt-7">
    <div className="bg-[#e9d4ad] w-[100vw] h-[50vh]  ">

      <div className="flex flex-col justify-center items-center gap-3 pt-7">
        <h4 className="text-[13px] text-zinc-500">GREAT REVIEWS FOR OUR SERVICES</h4>
      <h1 className="text-3xl">Technical Statistics</h1>
      </div>
      
      <div className="flex flex-row justify-evenly pt-8 ">

      <div className="flex flex-col items-center ">
        <h2 className="text-[40px] ">20</h2> 
        <h1 className="text-[14px]  text-zinc-500">YEAR OF EXPERIENCED</h1>
        </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[40px]"> 10,200</h2> 
        <h1 className="text-[14px]  text-zinc-500">SATISFIED CUSTOMERS</h1>
        </div>

      <div className="flex flex-col items-center ">
        <h2 className="text-[40px]"> 9,850</h2> 
        <h1 className="text-[14px]  text-zinc-500"> COMPLETED</h1>
        </div>

      <div className="flex flex-col items-center">
        <h2 className="text-[40px]">20</h2> 
        <h1 className="text-[14px]  text-zinc-500">PROJECT COMPLETED</h1>
        </div>

      </div>
      
    </div>
    </div>
  )
}

export default Stats