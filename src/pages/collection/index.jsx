import React from 'react'
import { about, abt5, chaise, cImg1, cImg3, cImg5 } from '../../assets';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'
const Collection = () => {
  return (
    <div className='flex flex-col space-y-1'>
    <div className="relative flex justify-center items-center w-screen h-screen text-center z-10"
  style={{
    backgroundImage: `url(${abt5})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    height: '600px',
    paddingTop: '40px',
  }}>

  {/* Add the black overlay */}
  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

  {/* Content above the image */}
  <div className='flex flex-col gap-3 absolute bottom-14 left-[530px] justify-center items-center z-10'>
    <div className='flex text-black text-2xl'>
      <Link to={'/'}>
        <h1 className='flex justify-center items-center text-white'>Home <ChevronRight className='text-white' /> </h1>
      </Link>

      <a href="about"><h1 className='flex justify-center text-white items-center'>Work <ChevronRight className='text-white' /> </h1></a>
    </div>

    <div>
      <h1 className='text-5xl text-white '>Our Collection</h1>
    </div>
  </div>
</div>


<div className='grid grid-cols-3 w-screen h-screen space-x-5'>
  <img src={chaise} alt="image" />
  <img src={cImg5} alt="image" />
  <img src={cImg3} alt="image" />
  <img src={about} alt="image" />
  {/* <img src={} alt="image" />
  <img src={} alt="image" />
  <img src={} alt="image" />
  <img src={} alt="image" />
  <img src={} alt="image" />
  <img src={} alt="image" /> */}
</div>
      
    </div>
  )
}

export default Collection;




