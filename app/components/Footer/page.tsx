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
import { useState, useEffect } from "react";
import logo from "./logo-footer.png";
import { useRouter } from "next/navigation";
import fimg from "./footer-img.jpg";
import { CgEnter } from "react-icons/cg";
import fimg2 from "./we-might-have-just-discovered-the-fountain-of-youth-90x72.jpg";
import { DateIcon } from "../RightMenu/pageStyles";
import { getPosts } from "@/app/utils/getBlogs";

export default function Footer() {
  const Router = useRouter();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const getAllPosts = async () => {
    setLoading(true);
    const res = await getPosts();
    setPosts(res);
    setLoading(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <FContainer>
      {/* <Image src={bgimg} alt="img"/> */}
      <FCon>
        <InnerCon>
          <Image width={300} src={logo} alt="logo1" />
          <div></div>
          <Image width={300} height={300} src={"/og-logo2.png"} alt="logo2" />
          <div></div>
          <h2>Address</h2>
          <p>
            Minna, Niger State : E: dazatv@gmail.com.com P: +234 (0) 0 0000 000
          </p>
        </InnerCon>
        <InnerCon>
          <h2>Recent Posts</h2>

          {posts.length > 0 ? (
            posts.map((post: any) => (
              <InnerConDiv key={post.id}>
                <Image
                  width={100}
                  height={100}
                  src={post.coverImg}
                  alt="cover_image"
                  className="w-[40%] my-1 cursor-pointer"
                  onClick={() => {
                    Router.push(`/BlogDetails/?id=${post.id}`);
                  }}
                />
                <div>
                  <h2
                    onClick={() => {
                      Router.push(`/BlogDetails/?id=${post.id}`);
                    }}
                  >
                    {" "}
                    {post.title.length > 25
                      ? `${post.title.slice(0, 25)}....`
                      : post.title}
                  </h2>
                  <small>
                    {" "}
                    <DateIcon />
                    {post.excerpt.length > 40
                      ? `${post.excerpt.slice(0, 40)}....`
                      : post.excerpt}
                  </small>
                </div>
                {/* <h1 className="text-xl font-bold">
                  {post.title.length > 25
                    ? `${post.title.slice(0, 25)}....`
                    : post.title}
                </h1>

                <span className="block text-sm mb-1">
                  {post.excerpt.length > 40
                    ? `${post.excerpt.slice(0, 40)}....`
                    : post.excerpt}
                </span> */}
              </InnerConDiv>
            ))
          ) : (
            <div className="flex w-[80vw] flex-col">
              <h1 className="text-gray-600">Oops no posts yet</h1>
            </div>
          )}

          {/* <InnerConDiv>
            <Image src={fimg2} alt="img" />
            <div>
              <h2>We Went Deep...</h2>
              <small>
                {" "}
                <DateIcon />
                Febuary 29, 2018
              </small>
            </div>
          </InnerConDiv> */}
          {/* <InnerConDiv>
            <Image src={fimg2} alt="img" />
            <div>
              <h2>We Went Deep...</h2>
              <small>
                {" "}
                <DateIcon /> Febuary 29, 2018
              </small>
            </div>
          </InnerConDiv>
          <InnerConDiv>
            <Image src={fimg2} alt="img" />
            <div>
              <h2>We Went Deep...</h2>
              <small>
                {" "}
                <DateIcon />
                Febuary 29, 2018
              </small>
            </div>
          </InnerConDiv> */}
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
              <input placeholder="Enter Your Email" />
              <button>
                {" "}
                <CgEnter />
              </button>
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
        </InnerCon>
      </FCon>
    </FContainer>
  );
}
