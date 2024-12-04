import { ChevronRight } from 'lucide-react'
import { abt5, cImg4, cImg5, fur, woman } from '../../assets'
import { Link } from 'react-router-dom'
import K from '../../constant'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import '../../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
  <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

  {/* Content above the image */}
  <div className='flex flex-col gap-3 absolute bottom-14 left-[560px] justify-center items-center z-10'>
    <div className='flex text-white text-2xl'>
      <Link to={'/'}>
        <h1 className='flex justify-center  text-white items-center'>Home <ChevronRight className=' text-white' /> </h1>
      </Link>

      <a href="about"><h1 className='flex  text-white justify-center items-center'>About us <ChevronRight className=' text-white' /> </h1></a>
    </div>

    <div>
      <h1 className='text-5xl  text-white '>ABOUT US</h1>
    </div>
  </div>
</div>


      <div className=' flex justify-center items-center mx-36 space-x-10 '>

        <img className='w-[30vw] h-[90vh]' src={woman} alt="image" />

        <div className='flex flex-col justify-center space-y-5  '>
          <p className='text-[#B2B2B2] text-[17px]'>About Furnish</p>
          <h1 className='text-[#052C43] text-4xl font-semibold'>More than 20k Trusted Our <br /> Furniture Industry</h1>
          <p className='text-[#8A8A8A] text-[20px] '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
          <p className='text-[#8A8A8A] text-[20px]  '> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          <button className='rounded-full w-40 uppercase h-12 bg-[#CF7500] text-white' >Learn more</button>
        </div>

      </div>

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
              <h1 className="text-[14px]  text-zinc-500">PROJECT COMPLETED</h1>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-[40px]">20</h2>
              <h1 className="text-[14px]  text-zinc-500">AWARDS</h1>
            </div>

          </div>

        </div>
      </div>
      <div className="pt-6 flex flex-col gap-8 ">

        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-[#71717A]">TESTMONIALS</p>
          <h1 className="text-2xl font-semibold">HAPPY CUSTOMERS</h1>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide> <div className="flex justify-center items-center gap-4">
            {
              K.CUSTOMERS.map(
                (customers, index) => {
                  return (

                    <div key={index} className="flex flex-col gap-5 border rounded-lg p-4 shadow-lg max-w-md">

                      <p className="mb-4">{customers.description}</p>
                      <div className="flex items-center gap-4">
                        <img src={customers.img} className="w-[100px]  object-cover rounded-lg" alt="img" />
                        <div>
                          <p className="text-lg font-semibold text-[#CF7500]">{customers.name}</p>
                          <p className="text-sm text-gray-500">{customers.title}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
            }

          </div></SwiperSlide>
          <SwiperSlide> <div className="flex justify-center items-center gap-4">
            {
              K.CUSTOMERS.map(
                (customers, index) => {
                  return (

                    <div key={index} className="flex flex-col gap-5 border rounded-lg p-4 shadow-lg max-w-md">

                      <p className="mb-4">{customers.description}</p>
                      <div className="flex items-center gap-4">
                        <img src={customers.img} className="w-[100px]  object-cover rounded-lg" alt="img" />
                        <div>
                          <p className="text-lg font-semibold text-[#CF7500]">{customers.name}</p>
                          <p className="text-sm text-gray-500">{customers.title}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
            }

          </div></SwiperSlide>
         
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>


      </div>



    </div>

  )
}

export default About