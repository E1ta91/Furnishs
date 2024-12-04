import K from "../../../constant"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import '../../../App.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Customers = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
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
        <SwiperSlide><div className="flex  justify-center items-center gap-4">
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
        <SwiperSlide><div className="flex  justify-center items-center gap-4">
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
        <SwiperSlide><div className="flex  justify-center items-center gap-4">
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
  )
}

export default Customers