"use client";
import Image from "next/image";
import React from "react";
import logo from "./logo.png";
import header from "./header-banner.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import SidebarNav from "../Sidebar/sidebar";

const Navbar = () => {
  const Router = useRouter();
  return (
    <main className="bg-[white] w-full border " >
      <nav className="h-full flex justify-between md:py-5 py-5 Bmd:justify-around m-auto md:w-[70%] w-full ">
        <div className=" cursor-pointer flex justify-start items-start ">
          <Image
            width={100}
            height={80}
            src={"/og-logo.png"}
            alt="logohere"
            onClick={() => {
              Router.push(`/`);
            }}
          />
        </div>
        <div className=" h-full items-center justify-center mr-10 sm:hidden  mt-5">
          <SidebarNav />
        </div>
        <div className="xmd:hidden mt-5">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      <nav className="bg-gray-900 text-white w-full h-[50px] flex justify-between text-sm xmd:hidden ">
        <div className="h-full flex flex-row-reverse justify-start items-center  m-auto w-[70%] ">
          <div className="border-l-2 border-solid border-gray-800 h-full pl-4 items-center justify-center flex ml-auto">
            <SidebarNav />
          </div>
          <div
            onClick={() => {
              Router.push(`https://www.tiktok.com/@nuruddeendaza`);
            }}
            className="hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex text-white    transition duration-150 ease-out"
          >
            TikTok
          </div>
          <div
            onClick={() => {
              Router.push(
                `https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog`
              );
            }}
            className="hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex text-white    transition duration-150 ease-out"
          >
            YouTube
          </div>
          <div
            onClick={() => {
              Router.push(`/allBlogs`);
            }}
            className="hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex text-white    transition duration-150 ease-out"
          >
            Blogs
          </div>
          <div
            onClick={() => {
              Router.push(`/`);
            }}
            className="bg-[#fb4c35] cursor-pointer border-r-1 border-solid border-gray-800 h-full  p-6 items-center justify-between flex hover:text-black  transition duration-150 ease-out"
          >
            Home
          </div>
        </div>
        <div></div>
      </nav>
    </main>
  );
};
export default Navbar;
