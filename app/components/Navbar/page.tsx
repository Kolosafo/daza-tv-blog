"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "./logo.png";
import header from "./header-banner.jpg";
import { FaBars } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/navigation";
import SidebarNav from "../Sidebar/sidebar";
import { useAppSelector } from "@/app/redux/store";

const Navbar = () => {
  const { active } = useAppSelector((store) => store.navSlice);

  // for navscroll
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Router = useRouter();
  return (
    <main
      className={` bg-[white] w-full border  transition duration-150 ease-out`}
    >
      <nav className=" bg-[white] h-full flex justify-between md:py-5 py-5 Bmd:justify-around m-auto md:w-[70%] w-full Bmd:hidden">
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
        <div className="  h-full items-center justify-center mr-10 sm:hidden  mt-5">
          <SidebarNav />
        </div>
        <div className="xmd:hidden mt-5">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      {/* MOBILE VIEW STICKY HEADER  */}
      <nav
        className={`${
          isVisible ? "translate-y-0 fixed top-0 z-50  " : ""
        } bg-[white]  justify-between md:py-5 py-1 Bmd:justify-around m-auto md:w-[70%] w-full hidden Bmd:flex `}
      >
        <div className=" cursor-pointer flex justify-start items-start ">
          <Image
            width={100}
            height={80}
            src={"/og-logo.png"}
            alt="logohere"
            onClick={() => {
              Router.push(`/`);
            }}
            className="md:w-full w-1/2"
          />
        </div>
        <div className="  h-full items-center justify-center mr-10 sm:hidden  mt-[0.4rem]">
          <SidebarNav />
        </div>
        <div className="xmd:hidden mt-5">
          <Image width={400} src={header} alt="header" />
        </div>
      </nav>
      <nav
        className={` ${
          isVisible ? "translate-y-0 fixed top-0 z-50  " : ""
        } bg-gray-900 text-white w-full h-[50px] flex justify-between text-sm xmd:hidden  transition ease-out`}
      >
   
        <div className="h-full flex flex-row-reverse justify-start items-center  m-auto w-[70%] ">
          <div
            className={` ${
              isVisible ? "" : ""
            }border-l-2 border-solid border-gray-800 h-full pl-4 items-center justify-center flex ml-auto`}
          >
            <SidebarNav />
          </div>
          <div
            onClick={() => {
              Router.push(`/comedy`);
            }}
            className={`${
              active === "comedy"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
          >
            Comedy
          </div>

          <div
            onClick={() => {
              Router.push(`/movies`);
            }}
            className={`${
              active === "movies"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
          >
            Movies
          </div>
          <div
            onClick={() => {
              Router.push(`/lifestyle`);
            }}
            className={`${
              active === "lifestyle"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
          >
            Lifestyle
          </div>
          <div
            onClick={() => {
              Router.push(`/music`);
            }}
            className={`${
              active === "music"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
          >
            Music
          </div>
          <div
            onClick={() => {
              Router.push(`/news`);
            }}
            className={`${
              active === "news"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            }  hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex    transition duration-150 ease-out`}
          >
            News
          </div>
          <div
            onClick={() => {
              Router.push(`/`);
            }}
            className={`${
              active === "home"
                ? "bg-[#fb4c35] text-black hover:text-white"
                : "text-white"
            } hover:bg-gray-700 cursor-pointer border-l-2 border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex  transition duration-150 ease-out`}
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
