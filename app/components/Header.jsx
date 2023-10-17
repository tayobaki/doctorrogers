"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import first from "@/assets/asset 25.jpeg";
import "@splidejs/react-splide/css";
// import '@splidejs/react-splide/css/core';
import { header } from "../constants/data";
// 252123

const Header = () => {
  return (
    <>
      {/* <header classNameName=" h-[50%] w-[10%] bg-gray ">
        <div classNameName=" w-full h-full">
          <div className=" flex">
            <div classNameName="flex items-center w-full h-full justify-between ">
              <div classNameName="absolute left-0 top-0   md:static w-1/2 h-full flex-1 md:justify-center flex flex-col">
                <h1>OK</h1>
              </div>
              <div classNameName="header-image absolute top-0 right-0 w-[76%] md:w-1/2 flex items-end justify-end md:h-fit h-full flex-1  ">
                <Image src={first} classNameName=" h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header> */}
      {/* <Splide
        options={{
          
        }}
        className=" h-screen w-full"
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div classNameName="relative flex items-center w-full h-full">
            <div className=" flex items-center">
              <div classNameName="flex items-center w-full h-full justify-between ">
                <div classNameName="absolute left-0 top-0   md:static w-1/2 h-full flex-1 md:justify-center flex flex-col">
                  <h1>OK</h1>
                </div>
                <div classNameName="header-image absolute top-0 right-0 w-[76%] md:w-1/2 flex items-end justify-end md:h-fit h-full flex-1  ">
                  <Image src={first} classNameName=" h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide> */}
    </>
  );
};

export default Header;
