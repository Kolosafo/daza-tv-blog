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
  MNav,
  Nav,
  NavContainer,
  RightSection,
} from "./PageStyles";

export default function UpperNavMobile() {
  return (
    <MNav>
      <NavContainer>
        <LeftSection>
          <span>@ 2016</span>
          <a>Qode Interactive</a>
          <span>All Rights Reserved</span>
        </LeftSection>
        <RightSection>
          <InfoSection>
            <span>
              English
              <AiOutlineArrowDown className="ml-2" />
            </span>
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
    </MNav>
  );
}
