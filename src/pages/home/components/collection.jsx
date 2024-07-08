import { armchair,chaise,cImg5, furniture, hotel, interior, } from "../../../assets"





const Collection = () => {
  return (
    <div className="flex flex-col gap-5 w-[100vw] bg-[#ECEFF7] pt-20">
      <div className="flex flex-col justify-center items-center gap-3 ">
      <h4 className="text-[13px] text-zinc-500">OUR FINISH PROJECTS</h4>
      <h1 className="text-3xl" >Furniture Collection</h1>
      </div>
       
      <div className="grid grid-cols-3 place-content-center gap-x-1 w-[90vw] h-[100vh] ml-16 ">
       <img className="" src={chaise} alt="img" />
        <img className="" src={interior} alt="img" />
        <img className=""  src={furniture} alt="img" />
        <img className="h-[60]" src={armchair} alt="img" />
        <img className="" src={cImg5} alt="img" />
        <img className=""  src={hotel} alt="img" />
       
       
        
      </div>
    </div>
  )
}

export default Collection