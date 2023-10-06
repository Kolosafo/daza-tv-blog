"use client";
import React from "react";
import SingleBlog from "./SingleBlog";
import { BgImg, BlogCon, Container, InnerSpan } from "./Styledcomp/pageStyles";
import bgimage from "./assets/11231.png";
import Image from "next/image";
import RecentBlog from "./RecentBlog";

export default function BlogArea() {
  return (
    <main className=" w-full justify-center items-center flex ">
      <div className="h-[40px]"></div>
      <div className="w-[70%]  ">
        <Container>
          <InnerSpan>Recent posts</InnerSpan>
          <BgImg>
            <Image height={40} src={bgimage} alt="img" />
          </BgImg>
        </Container>
        <BlogCon>
          <RecentBlog />
          <RecentBlog />
        </BlogCon>
        <Container>
          <InnerSpan>Recent posts</InnerSpan>
          <BgImg>
            <Image height={40} src={bgimage} alt="img" />
          </BgImg>
        </Container>
        <BlogCon>
          <SingleBlog/>
          <SingleBlog/>
        </BlogCon>
        <BlogCon>
          <SingleBlog/>
          <SingleBlog/>
        </BlogCon>
       

      </div>
    </main>
  );
}
