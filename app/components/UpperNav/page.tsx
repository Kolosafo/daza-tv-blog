"use client";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Uppernav() {
  return (
    <div
      className="relative h-auto w-full my-1 text-xs text-[#605e5e] bg-[#e6e7e8]"
      style={{ boxSizing: "border-box" }}
    >
      <div className="h-full m-auto w-[70%] p-0 flex justify-between items-center md:flex-row flex-col">
        <div className="w-1/2 m-0 md:mr-0 mr-[20px]">
          <span>@ 2023</span>
          <a className="mx-2">Daza TV</a>
          <span>All Rights Reserved</span>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div className="flex items-center mr-[16px] gap-1">
            {/* <span>
              English
              <AiOutlineArrowDown className="ml-2" />
            </span> */}
          </div>
          <div className="hidden md:flex  items-center mr-[16px] gap-1">
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaFacebookSquare />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaTwitter />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaLinkedin />
            </div>
            <div className="text-2xl mr-[5px] text-[#fb4c35] cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
