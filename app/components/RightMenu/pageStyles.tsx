import styled from "styled-components";
import { BgImg } from "../Blogarea/Styledcomp/pageStyles";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

export const RBgImg = styled(BgImg)`
  /* flex: 1; */
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
export const Twit = styled(FaTiktok)`
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

export const Comment = styled(BiMoviePlay)`
  font-size: 35px;
  position: absolute;
`;
export const Con1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  cursor: pointer;
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
  cursor: pointer;
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

export const Con4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
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
  cursor: pointer;
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

export const DateIcon = styled(BiMoviePlay)`
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
