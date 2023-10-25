"use client";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  IconWrapper,
  InfoSection,
  LeftSection,
  Nav,
  NavContainer,
  RightSection,
} from "./PageStyles";

export default function Uppernav() {
  return (
    <Nav>
      <NavContainer>
        <LeftSection>
          <span>@ 2023</span>
          <a className="mx-2">Daza TV</a>
          <span>All Rights Reserved</span>
        </LeftSection>
        <RightSection>
          <InfoSection>
            {/* <span>
              English
              <AiOutlineArrowDown className="ml-2" />
            </span> */}
          </InfoSection>
          <InfoSection>
            <IconWrapper>
              <FaFacebookSquare />
            </IconWrapper>
            <IconWrapper>
              <FaTwitter />
            </IconWrapper>
            <IconWrapper>
              <FaLinkedin />
            </IconWrapper>
            <IconWrapper>
              <FaInstagram />
            </IconWrapper>
          </InfoSection>
        </RightSection>
      </NavContainer>
    </Nav>
  );
}
