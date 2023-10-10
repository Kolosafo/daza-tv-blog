import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";
import {
  Face,
  Insta,
  Linkd,
  Twit,
} from "@/app/components/RightMenu/pageStyles";

export const BlogDetailsCon = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  p {
    display: flex;

    margin-right: 10px;
    margin-left: 10px;
    &:hover {
      color: #fb4c35;
      transition: 0.3s all ease-in-out;
      cursor: pointer;
    }
  }
`;
export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    border: 2px solid lightgray;
  }

  @media only screen and (max-width: 630px) {
    /* width: 47%; */
  }
`;

export const DetailsImg = styled.div``;

export const DetailsImgDiv = styled.div``;

export const DetailsSection = styled.div`
  padding: 32px 37px 42px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  @media only screen and (max-width: 630px) {
    padding: 10px 10px 15px;
  }
`;

export const DetailsTitle = styled.h1`
  font-size: 40px;
  line-height: 1.25em;
  color: black;

  @media only screen and (max-width: 630px) {
    font-size: 25px;
  }
`;

export const DetailsPTag = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 22px;
  font-family: Lato, sans-serif;

  @media only screen and (max-width: 630px) {
    font-size: 12px;
    margin-left: 15px;
  }
`;

export const DetailsMidSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  /* padding-left: 15px; */
  padding-right: 15px;
`;
export const MidDiv = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const DetailsMidImg = styled.div`
  flex: 1;
`;

export const DetailsImgTextCon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const MidConTitle = styled.h3`
  margin-bottom: 13px;
  font-size: 21px;
  color: #121212;
  text-transform: capitalize;
  font-weight: 400;
  @media only screen and (max-width: 630px) {
    font-size: 17px;
    margin-top: 10px;
    font-weight: 700;
  }
`;

export const MidConP = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 22px;
  font-family: Lato, sans-serif;
`;

export const QuoteI = styled(FaQuoteRight)`
  color: white;
  font-size: 26px;
  padding: 10px;
  font-style: normal;
  background-color: #fb4c35;
  text-rendering: auto;
  width: 60px;
  height: 60px;
`;

export const QuoteDiv = styled.div`
  display: flex;
  align-items: start;
  margin-top: 15px;
  justify-content: start;

  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;

export const QuoteIcon = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const QuoteText = styled.p`
  display: flex;
  flex: 4;
  font-size: 23px;
  line-height: 1.25em;
  color: black;
  @media only screen and (max-width: 630px) {
    font-size: 17px;
    margin-top: 10px;
    font-weight: 700;
  }
`;
export const Face1 = styled(Face)`
  position: relative;
  font-size: 25px;
`;
export const Twit1 = styled(Twit)`
  position: relative;
  font-size: 25px;
`;
export const Linkd1 = styled(Linkd)`
  position: relative;
  font-size: 25px;
`;
export const Insta1 = styled(Insta)`
  position: relative;
  font-size: 25px;
`;
export const SocialConDiv = styled.div`
  display: flex;
  width: 100%;
  @media only screen and (max-width: 630px) {
    justify-content: space-between;
  }
`;

export const SocialConText = styled.p`
  padding: 0 20px;
  background-color: #e6e7e8;
  color: #0d0d0d;
  font-size: 14px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 630px) {
    padding: 0 3px;
  }
`;

export const SocialConIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  width: 30%;
  @media only screen and (max-width: 630px) {
    width: 120px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DCon1 = styled.div`
  background-color: #3b5998;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 630px) {
    width: 25px;
    height: 25px;
  }
`;

export const DCon2 = styled.div`
  background-color: #1dcaff;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 630px) {
    width: 25px;
    height: 25px;
  }
`;

export const DCon3 = styled.div`
  background-color: #3f729b;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 630px) {
    width: 25px;
    height: 25px;
  }
`;

export const DCon4 = styled.div`
  background-color: #e52d27;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  @media only screen and (max-width: 630px) {
    width: 25px;
    height: 25px;
  }
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CHeader = styled.h2`
  padding: 8px 20px;
  background-color: #fb4c35;
  font-size: 25px;
  color: white;
  margin-bottom: 20px;

  @media only screen and (max-width: 630px) {
    padding: 4px 10px;
    font-size: 18px;
  }
`;

export const CTextarea = styled.textarea`
  position: relative;
  width: 100%;
  height: 150px;
  margin: 0 0 7px;
  padding: 11px 19px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #6c6b6b;
  background-color: #fff;
  border: none;
  outline: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media only screen and (max-width: 630px) {
    width: auto;
    height: 100px;
    margin-bottom: 15px;
  }
`;

export const InputAreas = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Input1 = styled.input`
  position: relative;
  margin: 0 0 7px;
  padding: 11px 19px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #6c6b6b;
  background-color: #fff;
  border: none;
  outline: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Input2 = styled.input`
  position: relative;
  margin: 0 0 7px;
  padding: 11px 19px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #6c6b6b;
  background-color: #fff;
  border: none;
  outline: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Input3 = styled.input`
  position: relative;
  margin: 0 0 7px;
  padding: 11px 19px;
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #6c6b6b;
  background-color: #fff;
  border: none;
  outline: 0;
  vertical-align: middle;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const CSubmit = styled.button``;

export const Related = styled.div``;

export const Rdiv = styled.div``;

export const Rimg = styled.div``;

export const Rtext = styled.p``;

export const Image = styled.img``;

{
  /* <Related>
<CHeader></CHeader>
<Rdiv>
  <Rimg>
    <Rtext></Rtext>
    <Image />
  </Rimg>
  <Rimg>
    <Rtext></Rtext>
    <Image />
  </Rimg>
  <Rimg>
    <Rtext></Rtext>
    <Image />
  </Rimg>
</Rdiv>
</Related> */
}
