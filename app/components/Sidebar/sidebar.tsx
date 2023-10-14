"use client";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";

const SidebarNav = () => {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="relative inline-flex items-center z-25  peer justify-center rounded-md  mt-2 text-#fb4c35 hover:text-white ">
          <FaBars aria-hidden="true" className=" text-red-500  h-9 w-9 z-35 " />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          leave="transition duration-75 ease-out"
        >
          <Disclosure.Panel className="fixed p-6 w-[40%] h-screen  bg-white z-10  top-0 left-0 transform  transition duration-150 ease-out">
            {/* <div className="  h-screen bg-gray-100 z-25 fixed top-0 right-[0] w-[30%] "></div> */}

            <div className="flex flex-col justify-start items-center ">
              <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 mt-4">
                Header/Title Here
              </h1>
              <div className="flex justify-around flex-col my-6 pb-4 h-[500px] ">
                <div className="flex mb-2 justify-center items-center gap-4 pl-2 border-b border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Link 1
                  </h3>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Link 2
                  </h3>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                    Link 3
                  </h3>
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
