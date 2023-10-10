"use client";
import React from "react";
import {
  BlogDetailsCon,
  Face1,
  Insta1,
  Linkd1,
  MidDiv,
  QuoteI,
  TitleText,
  Twit1,
} from "./BlogDetailsStyles";
import {
  BgImg,
  BlogWrapper,
  InnerSpan,
  MainBlogCon,
  MenuCon,
} from "../../../components/Blogarea/Styledcomp/pageStyles";
import RightMenu from "../../../components/RightMenu/page";
import { Container } from "../../../components/Blogarea/Styledcomp/BlogStyles";
import Image from "next/image";
import {
  DetailsWrap,
  DetailsImg,
  DetailsImgDiv,
  DetailsSection,
  DetailsTitle,
  DetailsPTag,
  DetailsMidSec,
  DetailsMidImg,
  DetailsImgTextCon,
  MidConTitle,
  MidConP,
  QuoteDiv,
  QuoteIcon,
  QuoteText,
  SocialConDiv,
  SocialConText,
  SocialConIcons,
  DCon1,
  DCon2,
  DCon3,
  DCon4,
  CommentSection,
  CHeader,
  CTextarea,
  InputAreas,
  Input1,
  Input2,
  Input3,
  CSubmit,
  Related,
  Rdiv,
  Rimg,
  Rtext,
} from "./BlogDetailsStyles";
import water from "./we-went-deep-underground-for-this-shot.jpg";
import manonwater from "./post-single-img-1-300x203.jpg";
export default function BlogDetailsComp() {
  return (
    <BlogDetailsCon>
      <BlogWrapper>
        <MainBlogCon>
          <TitleText>
            <p>Home </p> / <p>World</p>/ We Went Deep Underground For This
            Amazing Cave Shot
          </TitleText>
          <DetailsWrap>
            <DetailsImg>
              <DetailsImgDiv>
                <Image src={water} alt="tra" />
              </DetailsImgDiv>
            </DetailsImg>
            <DetailsSection>
              <DetailsTitle>
                We Went Deep Underground For This Amazing Cave Shot
              </DetailsTitle>
              <DetailsPTag>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis Theme
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis,
                feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae
                sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
                amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna.
              </DetailsPTag>
              <DetailsPTag>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis Theme
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Aliquam lorem ante, dapibus in, viverra quis,
                feugiat a, tellus. Phasellus viverra nulla ut metus varius
                laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.
              </DetailsPTag>
              <DetailsMidSec>
                <MidDiv>
                  <DetailsMidImg>
                    <Image width={450} src={manonwater} alt="water" />
                  </DetailsMidImg>
                  <DetailsImgTextCon>
                    <MidConTitle>
                      We Bring You All The Crucial Information From Every Field
                    </MidConTitle>
                    <MidConP>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      Theme natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Aliquam lorem ante, dapibus in,
                      viverra quis, feugiat a, tellus. Phasellus viverra nulla
                      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                      Etiam ultricies nisi vel augue. Curabitur ullamcorper
                      ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
                      tempus, tellus eget condimentum rhoncus. Maecenas tempus,
                      tellus eget condimentum rhoncus.
                    </MidConP>
                  </DetailsImgTextCon>
                </MidDiv>
                <DetailsPTag>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  Theme natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                  metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue.
                </DetailsPTag>

                <QuoteDiv>
                  <QuoteIcon>
                    <QuoteI />
                  </QuoteIcon>
                  <QuoteText>
                    It is a capital mistake to theorize before one has data.
                    Insensibly one begins to twist facts to suit theories,
                    instead of theories to suit facts.
                  </QuoteText>
                </QuoteDiv>
                <DetailsPTag>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  Theme natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Aliquam lorem ante, dapibus in,
                  viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                  metus varius laoreet. Quisque rutrum. Aenean imperdiet commodo
                  ligula eget dolor.
                </DetailsPTag>
                <SocialConDiv>
                  <SocialConText>Links:</SocialConText>
                  <SocialConIcons>
                    <DCon1>
                      <Face1 />
                    </DCon1>
                    <DCon2>
                      <Twit1 />
                    </DCon2>
                    <DCon3>
                      <Linkd1 />
                    </DCon3>
                    <DCon4>
                      <Insta1 />
                    </DCon4>
                  </SocialConIcons>
                </SocialConDiv>
              </DetailsMidSec>
            </DetailsSection>
          </DetailsWrap>
          <CommentSection>
            <CHeader>Leave A Comment</CHeader>
            <CTextarea placeholder="Type Message:" />
            <InputAreas>
              <Input1 placeholder="Name:" />
              <Input2 placeholder="Email:" />
              <Input3 placeholder="Website:" />
            </InputAreas>
            <CSubmit></CSubmit>
          </CommentSection>
        </MainBlogCon>

        <MenuCon>
          <RightMenu />
        </MenuCon>
      </BlogWrapper>
    </BlogDetailsCon>
  );
}
