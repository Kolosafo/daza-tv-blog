"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function UpperNavMobile() {
  const Router = useRouter();
  return (
    <div
      className="relative h-auto w-full text-xs my-1 text-[#605e5e] bg-[#e6e7e8] md:block hidden"
      style={{ boxSizing: "border-box" }}
    >
      <div className="h-full m-auto w-[70%] p-0 flex justify-between items-center md:flex-row flex-col">
        <div className="w-1/2 m-0 md:mr-0 mr-[20px]">
          <span>@ 2023</span>
          <a className="mx-4">DAZA TV</a>
          <span>All Rights Reserved</span>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center mr-[16px] gap-1">
            {/* <span>
              English
              <AiOutlineArrowDown className="ml-2" />
            </span> */}
          </div>
          <div
            className="hidden md:flex  items-center mr-[16px] gap-1"
            style={{ gap: "5" }}
          >
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaFacebookSquare
                onClick={() => {
                  Router.push(
                    "https://web.facebook.com/p/DAZA-TV-100063743503213/?paipv=0&eav=Afa-KB7UI3M66zNPz4n7WIPDNXQxl02xLWXoVCko1kjN8ZBD9WlzUtvEXZLxr6Nfp4w&_rdc=1&_rdr"
                  );
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaTiktok
                onClick={() => {
                  Router.push("https://www.tiktok.com/@nuruddeendaza");
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaYoutube
                onClick={() => {
                  Router.push(
                    "https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
                  );
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaInstagram
                onClick={() => {
                  Router.push("https://www.instagram.com/nuruddeendaza/");
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
