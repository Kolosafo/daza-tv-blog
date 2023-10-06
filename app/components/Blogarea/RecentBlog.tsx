import React from "react";
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
import Image from "next/image";
import onion from "../Slider/onion1.jpg"
import men from "../Slider/men1.jpg"
import img from "./assets/the-best-sports-for-a-demanding-workout-1024x569.jpg";
import { BotCon, BottomDiv, ImgCon, RecentShareLink, TextCon } from "./Styledcomp/RecentBlogsStyles";

export default function RecentBlog() {
  return (
    <Container>
      <ImageContainer>
        <Image width={600} src={img} alt="imghere" />
      </ImageContainer>
      <ContentContainer>
        <Title>The Best Sports For A Hard...</Title>
        <Date>February 19, 2019</Date>
      </ContentContainer>
      <Footer>
        <RecentShareLink>
          <p>Share /</p> <p>Comments /</p> <span>11902 Views</span> <p> Read More</p>
        </RecentShareLink>
        <BottomDiv>
            <BotCon>
            <ImgCon>
                <Image width={100} src={men} alt="img" />
            </ImgCon>
            <TextCon>
                <h2>Watching Global Warming in Action</h2>
                <p> Febuary 29, 2019</p>
            </TextCon>
            </BotCon>
            <BotCon>
            <ImgCon>
                <Image width={100} src={onion} alt="img" />
            </ImgCon>
            <TextCon>
                <h2>Watching Global Warming in Action</h2>
                <p> Febuary 29, 2019</p>
            </TextCon>
            </BotCon>
            <BotCon>
            <ImgCon>
                <Image width={100} src={img} alt="img" />
            </ImgCon>
            <TextCon>
                <h2>Watching Global Warming in Action</h2>
                <p> Febuary 29, 2019</p>
            </TextCon>
            </BotCon>

        </BottomDiv>
      </Footer>
    </Container>
  );
}
