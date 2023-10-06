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
    <nav className="relative h-[auto] w-full text-[14px] font-serif text-[#605e5e] bg-[#e6e7e8] box-border">
      <div className="h-full m-auto w-[70%]">
        <div className=" px-0 md:px-8 m-3 flex justify-between ">
          <div className=" w-1/2 mt-0 mr-20 mb-0 ml-0">
            <span>@ 2016</span>
            <a>Qode Interactive</a>
            <span>All Rights Reserved</span>
          </div>
          <div className=" w-1/2 flex items-center justify-end">
            <div className="flex items-center mr-4 justify-end">
              English
              <AiOutlineArrowDown className="ml-2" />
            </div>
            <div className="flex ">
              <FaFacebookSquare
                style={{
                  fontSize: "1.5rem",
                  marginRight: 5,
                  color: "rgb(251, 76, 53);",
                }}
              />
              <FaTwitter
                style={{
                  fontSize: "1.5rem",
                  marginRight: 5,
                  color: "rgb(251, 76, 53);",
                }}
              />
              <FaLinkedin
                style={{
                  fontSize: "1.5rem",
                  marginRight: 5,
                  color: "rgb(251, 76, 53);",
                }}
              />
              <FaInstagram
                style={{
                  fontSize: "1.5rem",
                  marginRight: 5,
                  color: "rgb(251, 76, 53);",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
