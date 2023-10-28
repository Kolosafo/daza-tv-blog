"use client";
import React from "react";

import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/navigation";


export const SidebarNav = () => {
  const [collapsed, setCollapsed] = React.useState(false);

   const handleCollapse = () => {
      setCollapsed(!collapsed)
    }

  const Router = useRouter();
  return (
    <div>
      <div className="">
        <button onClick={handleCollapse} className="relative inline-flex items-center z-25 peer justify-center rounded-md  mt-2 text-#fb4c35">
          <FaBars
            aria-hidden="true"
            className=" text-red-500  h-9 w-9 z-35  hover:text-white Bmd:hover:text-gray-700 "
          />
        </button>
        
          <div   className={` ${collapsed ? "translate-x-0 w-[30%] border border-red-400   " : "-translate-x-40 z-50 " } fixed p-6  h-screen  bg-white top-0 left-0 z-50   transition delay-50 ease-out`}>
            {/* <div className="  h-screen bg-gray-100 z-25 fixed top-0 right-[0] w-[30%] "></div> */}
            <button  onClick={handleCollapse}  className="absolute right-10 inline-flex items-center z-25 peer justify-center rounded-md  mt-2 text-#fb4c35 hover:text-white ">
              <GiCancel
                aria-hidden="true"
                className=" text-red-500  h-9 w-9 z-35 "
              />
            </button>

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
                    href="/news"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    News
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-purple-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="/comedy"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    Comedy
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-purple-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="/movies"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    Movies
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-purple-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="/lifestyle"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    Lifestyle
                  </a>
                </div>
                <div className="flex mb-2 justify-center  items-center gap-4 pl-2 border-b border-gray-200 hover:bg-purple-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <a
                    href="/music"
                    className="text-base text-gray-800 group-hover:text-white font-semibold"
                  >
                    Music
                  </a>
                </div>
              </div>
            </div>
          </div >
      </div>
    </div>
  );
};
export default SidebarNav;
