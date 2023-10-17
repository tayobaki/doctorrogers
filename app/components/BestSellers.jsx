"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BestSeller } from "../constants/data";
import { getProducts } from "@/lib";

const BestSellers = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <div className=" mt-10  bg-mainBg lg:mx-10 mx-8 ">
      <h1 className=" text-5xl uppercase font-medium italic my-5 text-center">
        Best sellers
      </h1>
      <div
        className=" items-start grid sm:grid-cols-2 lg:grid-cols-3 w-full gap-x-16  gap-y-0
       justify-between "
      >
        <>
          {BestSeller.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              className="py-5 group duration-200   cursor-pointer"
            >
              <Link
                href={`product/${product.slug}`}
                className=" aspect-square relative"
              >
                <span className=" absolute left-5 border border-black rounded-full px-4 py-0.5 top-5 uppercase text-[10px]">
                  award winner
                </span>
                <div className=" aspect-square h-full">
                  <Image
                    src={isHovered === index ? product.hover : product.img}
                    alt={product.hover}
                    className="  aspect-auto w-full object-contain"
                  />
                </div>
              </Link>
              <div className="text-lg font-medium flex items-center justify-between my-5">
                <h1 className=" group-hover:italic">{product.title}</h1>
                <span>{product.price}</span>
              </div>
              <button className=" py-2 w-full uppercase text-xs border border-black mt-2 block group-hover:visible invisible hover:bg-[#A8B5B0] hover:border-[#A8B5B0]">
                Add To Cart
              </button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default BestSellers;
