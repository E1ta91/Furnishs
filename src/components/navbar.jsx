import { Link } from "react-router-dom";
import K from "../constant";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <div className="flex justify-between px-32 py-10 fixed w-full left-0 top-0"  >
    <img className="w-48 mb-10" src={logo} alt="logo" />
     <div className="flex gap-x-12 text-[">
      {
        K.NAVLINKS.map(
          (item,index) => {
            return <Link key={index} to={item.path}>{item.name} </Link>
          }
        ) 
      }
     </div>
    </div>
    
  )
}

export default Navbar;