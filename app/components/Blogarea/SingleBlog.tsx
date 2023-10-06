import Image from "next/image";
import React from "react";
import img from "./the-best-sports-for-a-demanding-workout-1024x569.jpg";

export default function SingleBlog() {
  return (
    <div className="flex flex-col items-start justify-center w-[35%] border  pt-5">
      <div>
        <Image width={600} src={img} alt="imghere" />
      </div>
      <div className="p-7 justify-between flex flex-col text-start bg-white">
        <h2 className="text-2xl text-start pb-4">The Best Sports For A Hard...</h2>
        <small className="text-sm pb-4">Febuary 19, 2019</small>
        <span className="text-lg ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </span>
      </div>
      <div className=" px-7 py-4 bg-white w-full border border-t-gray">
        <a>
            share / comment
        </a>
      </div>
    </div>
  );
}
