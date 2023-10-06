import React from "react";
import SingleBlog from "./SingleBlog";

export default function BlogArea() {
  return (
    <main className=" w-full justify-center items-center flex ">
      <div className="h-[40px]"></div>
      <div className="w-[80%] ">
      <div
        style={{ backgroundImage: "url('img/title_pattern.png')" }}
        className="relative inline-block w-full align-middle mb-19 clear-both h-34  bg-repeat"
      >
        <span className="relative inline-block align-top h-full leading-inherit text-white bg-[#fb4c35] px-20 py-3 mt-10" >Recent posts</span>
      </div>
      <SingleBlog />
      </div>
     
    </main>
  );
}
