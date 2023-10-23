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
const Admin = () => {
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

  const getPromptForEdit = async (id: string) => {
    // const username = prompt("Enter username");
    // const password = prompt("Enter password");

    // if (username === LOGIN.NAME && password === LOGIN.PASSWORD) {
      Router.push(`/editBlog/?id=${id}`);
    // } else {
    //   notify("Incorrect Credentials");
    // }
  };

  const getAllPosts = async () => {
    setLoading(true);
    const res = await getPosts();
    setPosts(res);
    setLoading(false);
  };

  // const searchFunctionality = (value) => {
  //   if (!value || value === "") {
  //     setPosts(posts);
  //   }
  //   if (unfilteredPosts.length > 0) {
  //     const searched = unfilteredPosts.filter((post) =>
  //       post.title.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setPosts(searched);
  //   }
  // };

  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="p-5 flex flex-col relative">
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
              {/* BELOW IS POST SEARCH FUNCTIONALITY */}
              {/* <label htmlFor='search' className='flex justify-center my-4 items-center gap-1'>
              <input
                type='text'
                id='search'
                placeholder='Type something here...'
                className='shadow-md p-2.5 border border-transparent outline-none rounded-md focus:border-LightBlue'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button
                className='rounded-md text-white border-0 outline-transparent cursor-pointer bg-LightBlue p-3 shadow-md'
                onClick={() => searchFunctionality(searchTerm)}
              >
                Search
              </button>
            </label> */}

              <h1 className="text-DarkGray-Blue text-center text-2xl font-extrabold mb-4">
                Your Blogs Posts
              </h1>
            </div>
            <div className="flex my-10 gap-10 flex-wrap">
              {posts.length > 0 ? (
                posts.map((post: any) => (
                  <div
                    key={post.id}
                    className="rounded-lg max-w-[20rem] p-5 shadow-md bg-PaleBlue border-2 flex flex-col justify-center items-center w-full"
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
                          className="text-sm text-[#4f46e5] cursor-pointer"
                        >
                          Read More
                        </span>
                      </div>
                      <div className="flex justify-between w-full">
                        <span
                          // href={`/${post.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            getPromptForEdit(post.id);
                          }}
                          className="text-sm cursor-pointer text-[#e546a5]"
                        >
                          Edit
                        </span>
                      </div>
                      <div className="flex justify-between w-full">
                        <span
                          onClick={() => getPromptForDelete(post.id)}
                          className="text-sm text-[#e54646] font-semibold cursor-pointer"
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex w-[80vw] flex-col">
                  <h1 className="text-gray-600">Oops no posts yet</h1>
                  {isLogged && (
                    <button
                      className="customBtn self-end"
                      onClick={() => Router.push("/createBlog")}
                    >
                      NEW POST
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
        <button
          className="customBtn self-end mt-5 absolute bottom-0 right-5"
          onClick={() => Router.push("/createBlog")}
        >
          NEW POST
        </button>
      </div>
    </>
  );
};

export default Admin;
