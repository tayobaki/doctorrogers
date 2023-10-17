"use client";

import { useState, useEffect } from "react";
import Logo from "@/assets/asset 19.png";
import Search from "./Search";
import LogoSmall from "@/assets/asset 0.png";
import { navLinks } from "../constants/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { qty, cart, setCart } = useStateContext();
  return (
    <nav
      className={`${
        isOpen ? "bg-nav" : " bg-mainBg"
      } navbar flex items-center justify-between bg-mainBg py-4 lg:px-28 px-6 text-xs`}
    >
      {/* DESKTOP NAVIGATION */}
      {/* <Details /> */}

      <div className="hidden lg:flex bg-mainBg py-4 items-center uppercase justify-between w-full">
        <div className="flex items-center gap-10  list-none ">
          {navLinks.map((nav, idx) => (
            <span key={idx} className="">
              <li className=" cursor-not-allowed">{nav.title}</li>
            </span>
          ))}
        </div>

        <Link
          href={"/"}
          className=" z-50   absolute left-1/2 translate-x-[-50%]"
        >
          <Image
            src={Logo}
            width={139}
            height={52}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        <div className=" flex items-center gap-32">
          <span>
            <Search />
          </span>
          <div
            onClick={() => setCart(true)}
            className="relative rounded-full cursor-pointer  z-50 border-black border flex justify-center items-center p-4"
          >
            <span className=" absolute top-1/2  translate-y-[-50%] p-1">
              {qty}
            </span>
          </div>
          {cart && <Cart />}
        </div>
      </div>

      {/* MOBILE NAAVIGATION */}
      <div className=" flex lg:hidden items-center w-full justify-between">
        <div
          onClick={() => setIsOpen(true)}
          className=" uppercase cursor-pointer"
        >
          <span>Menu</span>
        </div>

        {isOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute bg-nav z-50 inset-0 whitespace-nowrap w-1/2 pt-8  h-screen"
          >
            <div className="relative h-full pl-6">
              <span
                className=" bg-nav cursor-pointer uppercase"
                onClick={() => setIsOpen(false)}
              >
                close
              </span>

              <div className="absolute bottom-5 right-4">
                <Image src={LogoSmall} width={20} height={30} />
              </div>

              <div className=" mt-20 relative">
                <ul className="text-3xl gap-10 flex flex-col ">
                  {navLinks.map((nav, idx) => (
                    <span key={idx} className=" flex flex-col">
                      <li className=" cursor-pointer">{nav.title}</li>
                      <div className=""></div>
                    </span>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        <Link href={"/"} className=" z-50">
          <Image
            src={Logo}
            width={139}
            height={52}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        <div
          onClick={() => setCart(true)}
          className="relative rounded-full cursor-pointer  border-black border flex justify-center items-center p-4"
        >
          <span className=" absolute top-1/2  translate-y-[-50%] p-1">
            {qty}
          </span>
        </div>
      </div>
      {cart && <Cart />}
    </nav>
  );
};

export default Nav;
