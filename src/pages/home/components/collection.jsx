import { armchair,chaise,cImg5, furniture, hotel, interior, } from "../../../assets"





const Collection = () => {
  return (
    <div className="flex flex-col gap-5 w-[100vw] bg-[#ECEFF7] mt-8">
      <div className="flex flex-col justify-center items-center gap-3 ">
      <h4 className="text-[13px] text-zinc-500">OUR FINISH PROJECTS</h4>
      <h1 className="text-3xl" >Furniture Collection</h1>
      </div>
       
      <div className="grid grid-cols-3 gap-4 place-content-center w-11/12 mx-auto mt-8">
      <img className="w-full h-auto" src={chaise} alt="img" />
      <img className="w-full h-auto" src={interior} alt="img" />
      <img className="w-full h-auto" src={furniture} alt="img" />
      <img className="w-full h-auto" src={armchair} alt="img" />
      <img className="w-full h-auto" src={cImg5} alt="img" />
      <img className="w-full h-auto" src={hotel} alt="img" />
    </div>

    </div>
  )
}

export default Collection