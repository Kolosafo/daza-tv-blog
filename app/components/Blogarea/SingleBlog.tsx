"use client";
import Image from "next/image";
import React from "react";
import img from "./assets/we-went-deep-underground-for-this-shot-600x384.jpg";
import {
  Container,
  ContentContainer,
  Date,
  Description,
  Footer,
  ImageContainer,
  ShareLink,
  Title,
} from "./Styledcomp/BlogStyles";
import { BsFillShareFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";

export default function SingleBlog() {
  return (
    <Container>
      <ImageContainer>
        <Image width={600} src={img} alt="imghere" />
      </ImageContainer>
      <ContentContainer>
        <Title>The Best Sports For A Hard...</Title>
        <Date>February 19, 2019</Date>
        <Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </Description>
      </ContentContainer>
      <Footer>
        <ShareLink>
          <div>
        
          <BsFillShareFill /> <span/>
          share /<span/> <BiCommentDetail /> <span/> 4 comment
          </div>
        </ShareLink>
      </Footer>
    </Container>
  );
}
