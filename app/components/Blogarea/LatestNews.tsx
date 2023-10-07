import React from "react";
import { BotCon, MainCon, TopCon } from "./Styledcomp/LatestNewsStyles";
import Image from "next/image";
import girl1 from "./assets/what-we-should-really-be-playing-on-rnb-stations-970x500.jpg";
import {
  Footer,
  ContentContainer,
  Date,
  Description,
  ShareLink,
  Title,
} from "./Styledcomp/BlogStyles";
import { BsFillShareFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
export default function LatestNews() {
  return (
    <MainCon>
      <TopCon>
        <Image src={girl1} alt="girl" />
      </TopCon>
      <BotCon>
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
              <BsFillShareFill /> <span /> share /<span /> <BiCommentDetail />
              <span /> 4 comment
            </div>
          </ShareLink>
        </Footer>
      </BotCon>
    </MainCon>
  );
}
