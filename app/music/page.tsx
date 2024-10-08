"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPosts } from "../utils/getBlogs";
import { LOGIN } from "../utils/createPost";
import { Circles, RotatingTriangles } from "react-loader-spinner";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar/page";
import { useDispatch } from "react-redux";
import { music, news } from "../../redux/navslice";
import { ThunkDispatch } from "@reduxjs/toolkit";
const News = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const notify = (arg: any) => toast(arg);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const Router = useRouter();
  const isLogged = true;

  const getPromptForDelete = async (id: string) => {
    const username = prompt("Enter username");
    const password = prompt("Enter password");
    if (username === LOGIN.NAME && password === LOGIN.PASSWORD) {
      setLoading(true);
      const postToDelete = doc(db, "posts", id);
      await deleteDoc(postToDelete);
      window.location.reload();
    } else {
      notify("Incorrect Credentials");
    }
  };

  const getAllPosts = async () => {
    setLoading(true);
    const res = await getPosts();
    const filter = res.filter((items: any)=> items.category === "Music")
    setPosts(filter);
    setLoading(false);
  };
  useEffect(() => {
    getAllPosts();
    dispatch(music())
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="p-5 flex flex-col relative bg-white">
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <div>
              <h1 className="text-DarkGray-Blue text-center text-2xl font-extrabold mb-4">
                Music Blog Posts
              </h1>
            </div>
            <div className="flex my-10 gap-10 flex-wrap">
              {posts.length > 0 ? (
                posts.map((post: any) => (
                  <div
                    key={post.id}
                    className="rounded-lg w-[45%] p-5 bg-gray-100 shadow-md bg-PaleBlue border-2 flex flex-col justify-center items-center"
                  >
                    <h1 className="text-xl font-bold">
                      {post.title.length > 25
                        ? `${post.title.slice(0, 25)}....`
                        : post.title}
                    </h1>
                    <Image
                      width={100}
                      height={100}
                      src={post.coverImg}
                      alt="cover_image"
                      className="w-[40%] my-1"
                    />
                    <span className="block text-sm mb-1">
                      {post.excerpt.length > 40
                        ? `${post.excerpt.slice(0, 40)}....`
                        : post.excerpt}
                    </span>
                    <div className="flex mt-8 w-full">
                      {" "}
                      <div className="flex justify-between w-full">
                        <span
                          onClick={() => {
                            Router.push(`/BlogDetails/?id=${post.id}`);
                          }}
                          className="text-sm text-[#4f46e5] cursor-pointer p-2 rounded-md bg-orange-200"
                        >
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex w-[80vw] flex-col">
                  <h1 className="text-gray-600">Oops no posts yet</h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default News;
