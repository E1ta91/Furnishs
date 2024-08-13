import { Linkedin, LinkedinIcon, Mail, Map, MoveRight, Phone } from "lucide-react"
import { twitter, whatsaap } from "../assets"


const Footer = () => {
  return (
    <div className="pt-10">
    <div className="bg-[#FDD78F] w-[100vw] h-[40vh] flex justify-evenly pt-14 ">
      <div>
        <h2 className="font-semibold text-[2xl]">Furnish</h2>
        <p className="">A small river named Duden <br /> flows by their place <br />and supplies it with the necessary regelialia</p>
        <Linkedin/>
        {}
       
      </div>

      <div>
        <h2 className="font-semibold">Services</h2>
       <div className="flex flex-col gap-3">
         <div className="flex gap-3"><MoveRight className="w-4 text-white"/> Amazing Deals</div>
         <div className="flex gap-3"><MoveRight className="w-4  text-white"/> Quality Furniture</div>
         <div className="flex gap-3"> <MoveRight className="w-4  text-white"/> Modern Design </div>
         <div className="flex gap-3"><MoveRight className="w-4  text-white"/>  Best Support</div>  
             
          </div>
      </div>

      <div  >
        <h2 className="font-semibold">Have a Questions?</h2>
        <div className="flex flex-col gap-3" >
          <div className="flex gap-3"><Map className="w-4  text-white "/> 203 Fake St. Mountain View, San Francisco</div>
          <div className="flex gap-3" ><Phone className="w-4  text-white "/> +2 392 3929 210</div>
          <div className="flex gap-3" ><Mail className="w-4  text-white "/>	info@yourdomain.com</div> 
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer