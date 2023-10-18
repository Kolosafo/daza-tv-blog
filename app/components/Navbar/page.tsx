"use client"
import Image from "next/image";
import React from "react";
import logo from "./logo.png";
import header from "./header-banner.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import SidebarNav from "../Sidebar/sidebar";


const Navbar = () => {
  const Router= useRouter()
  return (
    <main className="bg-[white] w-full border  ">
      <nav className="h-full flex justify-between md:py-8 py-5 m-auto md:w-[70%] w-full">
        <div className="md:ml-0 -ml-10 cursor-pointer">
          <Image width={400} src={logo} alt="logohere" onClick={() => {
            Router.push(`/`);
          }} />
        </div>
        <div className="hidden h-full items-center justify-center  lg:flex">
            {/* <FaBars size="2rem" /> */}
            <SidebarNav  />

          </div>
        <div className="lg:hidden">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      <nav className="bg-gray-900 text-white w-full h-[50px] flex justify-between text-sm lg:hidden">
        <div className="h-full flex flex-row-reverse justify-start items-center  m-auto w-[70%]">
          <div className="border-l-2 border-solid border-gray-800 h-full pl-4 items-center justify-center flex">
          <SidebarNav />
          </div>
          <div className="bg-[#fb4c35] border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex">
            Home
            <AiOutlineDown className="ml-3" size="1.3rem" />
          </div>
        
          
        </div>
        <div>
        
        </div>
      </nav>
    </main>
  );
}
export default  Navbar;