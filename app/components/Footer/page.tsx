"use client";
import React from "react";
import {
  Comment,
  Contact,
  FCon,
  FContainer,
  InnerCon,
  InnerConDiv,
} from "./PageStyles";
import Image from "next/image";
import bgimg from "./footer-background.jpg";
import logo from "./logo-footer.png";
import fimg from "./footer-img.jpg";
import { CgEnter } from "react-icons/cg";
import fimg2 from "./we-might-have-just-discovered-the-fountain-of-youth-90x72.jpg";
import { DateIcon } from "../RightMenu/pageStyles";
import { useRouter } from "next/navigation";

export default function Footer() {
  const Router = useRouter();
  return (
    <FContainer>
      {/* <Image src={bgimg} alt="img"/> */}
      <FCon>
        <InnerCon>
          <Image width={200} src={logo} alt="logo" />
          <div></div>
          <Image width={200} height={200} src="/logo.jpg" alt="logo" />
          <div></div>
          <h2>Address</h2>
          <p>
            Minna, Niger State : E: dazatv@gmail.com.com P: +234 (0) 0 0000 000
          </p>
        </InnerCon>

        {/* <InnerCon>
          <h2>Recent Comments</h2>
          <Comment>
            <p>Digital Watch</p>
          </Comment>
          <Comment>
            <p>Leather shoes</p>
          </Comment>
          <Comment>
            <p>Summer Shirt</p>
          </Comment>
          <Contact>
          <h2>Newsletter</h2>

          <p>Get in touch with us right now!</p>
          <div>
          <input placeholder="Enter Your Email"/>
          <button> <CgEnter /></button>
          </div>
          </Contact>
        </InnerCon> */}
        <InnerCon
          className=" cursor-pointer underline"
          onClick={() => {
            Router.push(
              "https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
            );
          }}
        >
          <h2>Follow us on YouTube</h2>
          {/* <p>Could not Connect to Twitter</p> */}
        </InnerCon>
      </FCon>
    </FContainer>
  );
}
