"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
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
  const Router = useRouter();
  return (
    <MNav>
      <NavContainer>
        <LeftSection>
          <span>@ 2023</span>
          <a className="mx-4">DAZA TV</a>
          <span>All Rights Reserved</span>
        </LeftSection>
        <RightSection>
          <InfoSection>
            {/* <span>
              English
              <AiOutlineArrowDown className="ml-2" />
            </span> */}
          </InfoSection>
          <InfoSection style={{gap: "5"}}>
            <IconWrapper>
              <FaFacebookSquare   onClick={() => {
                Router.push(
                  "https://web.facebook.com/p/DAZA-TV-100063743503213/?paipv=0&eav=Afa-KB7UI3M66zNPz4n7WIPDNXQxl02xLWXoVCko1kjN8ZBD9WlzUtvEXZLxr6Nfp4w&_rdc=1&_rdr"
                );
              }}
              classname="cursor-pointer" />
            </IconWrapper>
            <IconWrapper>
            <FaTiktok
              onClick={() => {
                Router.push("https://www.tiktok.com/@nuruddeendaza");
              }}
              classname="cursor-pointer"
            />
            </IconWrapper>
            <IconWrapper>
            <FaYoutube
              onClick={() => {
                Router.push(
                  "https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
                );
              }}
              classname="cursor-pointer"
            />
            </IconWrapper>
            <IconWrapper>
              <FaInstagram   onClick={() => {
                Router.push(
                  "https://www.instagram.com/nuruddeendaza/"
                );
              }}
              classname="cursor-pointer" />
            </IconWrapper>
          </InfoSection>
        </RightSection>
      </NavContainer>
    </MNav>
  );
}
