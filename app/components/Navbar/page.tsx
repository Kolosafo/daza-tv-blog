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
    <main className="bg-[white] w-full border pb-10 ">
      <nav className="h-full flex justify-between md:py-5 py-5 m-auto md:w-[70%] w-full">
        <div className="Bmd:ml-0 -ml-20 cursor-pointer flex justify-start items-start">
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
        <div className=" h-full items-center justify-center mr-10 sm:hidden">
          <SidebarNav />
        </div>
        <div className="xmd:hidden">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      <nav className="bg-gray-900 text-white w-full h-[50px] flex justify-between text-sm xmd:hidden ">
        <div className="h-full flex flex-row-reverse justify-start items-center  m-auto w-[70%]">
          <div className="border-l-2 border-solid border-gray-800 h-full pl-4 items-center justify-center flex ml-auto">
            <SidebarNav />
          </div>
          <div
            onClick={() => {
              Router.push(`https://www.tiktok.com/@nuruddeendaza`);
            }}
            className="bg-[#fb4c35] cursor-pointer border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex"
          >
            TikTok
          </div>
          <div
            onClick={() => {
              Router.push(
                `https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog`
              );
            }}
            className="bg-[#fb4c35] cursor-pointer border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex"
          >
            YouTube
          </div>
          <div
            onClick={() => {
              Router.push(`/allBlogs`);
            }}
            className="bg-[#fb4c35] cursor-pointer border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex"
          >
            Blogs
          </div>
          <div
            onClick={() => {
              Router.push(`/`);
            }}
            className="bg-[#fb4c35] cursor-pointer border-r-1 border-solid border-gray-800 h-full ml-4 p-4 items-center justify-between flex"
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
