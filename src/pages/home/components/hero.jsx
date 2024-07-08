import { bg2 } from "../../../assets"


const Hero = () => {
  return (
    <div className="flex ">

      <div className="w-1/2 bg-[#fdd78f] place-content-center">
      <div className="mx-auto w-fit flex flex-col items-start gap-y-5">
        <div className="flex flex-col text-5xl">
        <span className="font-thin">Best Design of</span>
        <span className="font-bold">Furniture Collections</span>
      </div>
      <p>A small river named Duden flows by their place <br/>and supplies it with the necessary regelialia.</p>
      <button className="bg-white px-6 py-2 drop-shadow-lg rounded-full uppercase text-[#6A4D39]">Discover</button>
      </div>
      </div>


      <div className="w-1/2 ">
        <img src={bg2} alt="hero" className="w-full object-cover h-screen"/>
      </div>
      
    </div>
  )
}

export default Hero