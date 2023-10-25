"use client";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/navigation";

const SidebarNav = () => {
  const Router = useRouter();
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="relative inline-flex items-center z-25 peer justify-center rounded-md  mt-2 text-#fb4c35">
          <FaBars aria-hidden="true" className=" text-red-500  h-9 w-9 z-35  hover:text-white Bmd:hover:text-gray-700  transition duration-150 ease-out" />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          leave="transition duration-75 ease-out"
        >
          <Disclosure.Panel className="fixed p-6 w-[30%] h-screen  bg-white z-10  top-0 left-0 transform  transition duration-150 ease-out">
            {/* <div className="  h-screen bg-gray-100 z-25 fixed top-0 right-[0] w-[30%] "></div> */}
            <Disclosure.Button className="absolute right-10 inline-flex items-center z-25 peer justify-center rounded-md  mt-2 text-#fb4c35 hover:text-white ">
              <GiCancel
                aria-hidden="true"
                className=" text-red-500  h-9 w-9 z-35 "
              />
            </Disclosure.Button>

            <div className="flex flex-col justify-start items-center mt-16">
              <h1
                onClick={() => {
                  Router.push("/");
                }}
                className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 mt-4"
              >
                Daza TV
              </h1>
              <div className="flex justify-around flex-col my-6 pb-4 h-[500px] ">
                <div className="flex mb-2 justify-center items-center gap-4 pl-2 border-b border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="/allBlogs"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    Blogs
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-red-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
                    target="_blank"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    YouTube
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-purple-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="https://www.tiktok.com/@nuruddeendaza"
                    target="_blank"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};
export default SidebarNav;
