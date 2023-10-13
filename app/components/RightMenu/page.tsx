import React from "react";
import { BgImg, Container, InnerSpan } from "../Blogarea/Styledcomp/pageStyles";
import Image from "next/image";
import lady2 from "./these-teens-are-crazy-for-beach-soccer-117x84.jpg"
import git from "./the-unplugged-concert-well-always-remember-117x84.jpg"
import {
  Comment,
  CommentCon,
  Con1,
  Con2,
  Con3,
  Con4,
  Con5,
  Con6,
  ConDiv,
  DateIcon,
  Face,
  Insta,
  LCon,
  Linkd,
  RBgImg,
  RCommentCon,
  RCon,
  RContainer,
  RTitle,
  RWrap,
  RWrap2,
  Rinnerspan,
  Rsection,
  SmallTitle,
  SocialCon,
  TopSection,
  Twit,
  Yt,
} from "./pageStyles";
import smoke from "./vote-for-the-top-tracks-of-the-month-117x84.jpg";
import lady from "./natural-sunlight-can-boost-your-immune-system-117x84.jpg";
import Rimg from "../Blogarea/assets/we-went-deep-underground-for-this-shot-600x384.jpg";
import bgimage from "../Blogarea/assets/11231.png";
import {
  ContentContainer,
  Date,
  ImageContainer,
  Title,
} from "../Blogarea/Styledcomp/BlogStyles";
import { useRouter } from "next/navigation";

export default function RightMenu() {
  const Router = useRouter();
  return (
    <RCon className="mt-10">
      <RContainer>
        <RWrap>
          <Rinnerspan>Stay Connected</Rinnerspan>
          <RBgImg></RBgImg>
        </RWrap>
        <SocialCon>
          <Con1 onClick={() =>{ Router.push("https://web.facebook.com/p/DAZA-TV-100063743503213/?paipv=0&eav=Afa-KB7UI3M66zNPz4n7WIPDNXQxl02xLWXoVCko1kjN8ZBD9WlzUtvEXZLxr6Nfp4w&_rdc=1&_rdr")}}>
            <Face />
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con1>
          <Con2 onClick={() =>{ Router.push("https://www.tiktok.com/@nuruddeendaza")}}>
          
            <Twit />
            <ConDiv>
              <p>8,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con2>
          {/* <Con3>
            <Linkd />
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con3> */}
          <Con4 onClick={() =>{ Router.push("https://www.instagram.com/nuruddeendaza/")}}>
     
            <Insta />
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con4>
          <Con5 onClick={() =>{ Router.push("https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog")}}>
            <Yt />
            <ConDiv>
              <p>1,200</p>
              <span>Subs</span>
            </ConDiv>
          </Con5>
          {/* <Con6>
            <Comment />
            <ConDiv>
              <p>0</p>
              <span>Fans</span>
            </ConDiv>
          </Con6> */}
        </SocialCon>
        {/* <RWrap2 onClick={() => Router.push("/allBlogs")}>
          <Rinnerspan>More Posts</Rinnerspan>
          <RBgImg></RBgImg>
        </RWrap2> */}
        {/* <RContainer>
          <ImageContainer>
            <Image width={330} src={Rimg} alt="imghere" />
          </ImageContainer>
          <ContentContainer>
            <Title>The Best Sports For A Hard...</Title>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </ContentContainer>
        </RContainer> */}
        {/* <RWrap2>
          <Rinnerspan>Recent Comments</Rinnerspan>
        </RWrap2> */}
        {/* <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Digital Watch</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>leather Shoes</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Summer Shirt</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Pastel Belts</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>HD Headphones</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon> */}
        {/* <Rsection>
          <TopSection>
            <span>Fun</span>
            <div>Food</div>
            <div>Sport</div>
          </TopSection>
          <RCommentCon>
            <div>
              <Image src={lady2} alt="ggs" />
              <span>
                <SmallTitle>Lady enjoying..</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
          <RCommentCon>
            <div>
              <Image src={smoke} alt="ggs" />
              <span>
                <SmallTitle>HD Headphones</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
          <RCommentCon>
            <div>
              <Image src={lady} alt="ggs" />
              <span>
                <SmallTitle>Lady enjoyin the sky</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
          <RCommentCon>
            <div>
              <Image src={git} alt="ggs" />
              <span>
                <SmallTitle>Music to the soul</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
        </Rsection> */}
      </RContainer>
    </RCon>
  );
}
