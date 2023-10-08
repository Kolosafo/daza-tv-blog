"use client";
import React from "react";
import SingleBlog from "./SingleBlog";
import {
  BgImg,
  BlogAreaCon,
  BlogCon,
  BlogWrapper,
  Container,
  InnerSpan,
  MainBlogCon,
  MenuCon,
} from "./Styledcomp/pageStyles";
import bgimage from "./assets/11231.png";
import Image from "next/image";
import RecentBlog from "./RecentBlog";
import LatestNews from "./LatestNews";
import RightMenu from "../RightMenu/page";

export default function BlogArea() {
  return (
    <BlogAreaCon>
      <BlogWrapper>
        <MainBlogCon>
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
            <InnerSpan>Latest News</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          <BlogCon>
            <LatestNews />
          </BlogCon>

          <Container>
            <InnerSpan>Reports</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          <BlogCon>
            <SingleBlog />
            <SingleBlog />
          </BlogCon>
          <BlogCon>
            <SingleBlog />
            <SingleBlog />
          </BlogCon>
        </MainBlogCon>
        <MenuCon>
          <RightMenu />
        </MenuCon>
      </BlogWrapper>
    </BlogAreaCon>
  );
}
