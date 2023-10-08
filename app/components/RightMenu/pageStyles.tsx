import styled from "styled-components";
import { Container, BgImg, InnerSpan } from "../Blogarea/Styledcomp/pageStyles";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaComments,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { Title } from "../Blogarea/Styledcomp/BlogStyles";

export const RCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
`;
export const RContainer = styled(Container)`
  width: 100%;
  margin-bottom: 0px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: start;

`;
export const RWrap = styled.div`
  display: flex;
  width: 100%;
`;
export const RWrap2 = styled(RWrap)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Rinnerspan = styled(InnerSpan)`
  color: white;
  background-color: black;
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;

  /* flex: 1; */
`;
export const RBgImg = styled(BgImg)`
  /* flex: 1; */
`;

export const SocialCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
export const ConDiv = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-top: 80px;
  opacity: 0;
  span {
    padding: 0;
    margin: 0;
    font-size: 13px;
  }
  p {
    /* margin-top: 15px; */
    font-size: 13px;
  }
`;
export const Face = styled(FaFacebookSquare)`
  font-size: 35px;
  position: absolute;
`;
export const Twit = styled(FaTwitter)`
  font-size: 35px;
  position: absolute;
`;
export const Linkd = styled(FaLinkedin)`
  font-size: 35px;
  position: absolute;
`;
export const Insta = styled(FaInstagram)`
  font-size: 35px;
  position: absolute;
`;
export const Yt = styled(FaYoutube)`
  font-size: 35px;
  position: absolute;
`;
export const Comment = styled(FaComments)`
  font-size: 35px;
  position: absolute;
`;
export const Con1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #3b5998;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Face} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;
export const Con2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #1dcaff;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Twit} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;
export const Con3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #3f729b;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Linkd} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;
export const Con4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #e52d27;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Insta} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;
export const Con5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #837d7d;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Yt} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;
export const Con6 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 2px;
  flex-direction: column;
  background-color: #464646;
  color: white;
  &:hover ${ConDiv} {
    display: flex;
    margin-top: 40px;
    transition: 0.3s all ease-in-out;
    opacity: 1;
  }
  &:hover ${Comment} {
    margin-bottom: 50px;
    transition: 0.3s all ease-in-out;
  }
`;

export const DateIcon = styled(CiCalendarDate)`
  color: #fb4c35;
  font-size: 25px;
  padding-right: 7px;
  padding-left: 2px;
`;
export const CommentCon = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  width: 100%;
`;
export const LCon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RCommentCon = styled.div`
  flex: 3;
 
  background-color: #fff;
  div{
   
    padding: 10px;
    display: flex;
  }
  span{
    margin-left: 6px;
  }
`;
export const SmallTitle = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: black;
`
export const RTitle = styled(Title)`
  font-size: 22px;
  margin: 0;
  margin-top: 8px;
  font-weight: 500;
`;

export const Rsection = styled.div`
  margin-top: 20px;
`;
export const TopSection = styled.div`
  display: flex;
  /* padding: 13px; */
  background-color: white;
  color: black;
  div {
    padding: 0px 15px;
  }
  span {
    padding: 0px 15px;
    background-color: #000;
    color: white;
  }

`;
