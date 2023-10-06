import Image from "next/image";
import React from "react";
import logo from "./logo.png";
import header from "./header-banner.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  return (
    <main className="bg-[white] w-full border  ">
      <nav className="h-full flex justify-between py-10 m-auto w-[70%] ">
        <div>
          <Image width={400} src={logo} alt="logohere" />
        </div>
        <div className="hidden  h-full pl-4 items-center justify-center  lg:flex">
            <FaBars size="2rem" />
          </div>
        <div className="lg:hidden">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      <nav className="bg-[#0d0d0d] text-white w-full h-[50px] flex justify-between text-sm lg:hidden">
        <div className="h-full flex justify-start items-center  m-auto w-[70%]">
          <div className="border-l-2 border-solid border-gray-800 h-full pl-4 items-center justify-center flex">
            <FaBars size="2rem" />
          </div>
          <div className="bg-[#fb4c35] border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Home
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Lifestyle
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Videos
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            World
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Layouts
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2  border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex text-center">
            Posts
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          <div className="border-r-2 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Features
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
          
        </div>
        <div>
        
        </div>
      </nav>
    </main>
  );
}
