"use client";
import { useState, useEffect } from "react";
import SingleBlog from "./SingleBlog";

import bgimage from "./assets/11231.png";
import Image from "next/image";
import LatestNews from "./LatestNews";
import RightMenu from "../RightMenu/rightMenu";
import { useRouter } from "next/navigation";
import { getPosts } from "@/app/utils/getBlogs";
import { Circles } from "react-loader-spinner";
import { getYouTubeThumbnails } from "@/app/utils/ytApi";
import { RBgImg } from "../RightMenu/pageStyles";
import { ToastContainer, toast } from "react-toastify";
import { shuffleArray } from "@/app/utils/helpers";
import { loadPosts } from "@/redux/posts/postSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export default function BlogArea() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const notify = (arg: any) => toast(arg);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const [youtubePosts, setYouTubePosts] = useState<any>(null);

  const getAllPosts = async () => {
    setLoading(true);
    const res = await getPosts();
    dispatch(loadPosts(res));
    setPosts(res);
    const youtubeVideos = await getYouTubeThumbnails();
    setYouTubePosts(shuffleArray(youtubeVideos));
    setLoading(false);
  };

  // const getYtVideos = async () => {
  //   setLoading(true);
  //   const youtubeVideos = await getYouTubeThumbnails();
  //   setYouTubePosts(youtubeVideos);
  //   setLoading(false);
  // };

  useEffect(() => {
    getAllPosts().catch((e) => {
      notify("An Error Occured");
    });
    // getYtVideos();
  }, []);
  const Router = useRouter();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="md:w-[70%] w-[95%] flex justify-center items-start md:flex-row flex-col mt-10">
        <div
          className="flex flex-col justify-start items-start"
          style={{ flex: 3 }}
        >
          {/* <Container>
            <InnerSpan>Recent posts</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          <BlogCon>
            {/* <RecentBlog position={1} />
            <RecentBlog position={2} /> 
          </BlogCon> */}
          <div className="w-full justify-start items-center flex h-full mb-4">
            <div className="text-center h-full w-[20%] text-white">
              Latest News
            </div>
            <div className="justify-center">
              <Image height={40} src={bgimage} alt="img" />
            </div>
          </div>
          <div className="md:flex block md:flex-row flex-col flex-wrap md:justify-between md:items-start justify-center items-center md:w-auto w-full mb-10">
            {loading && posts.length === 0 ? (
              <div className="flex justify-center w-[60vw] items-center h-[70vh]">
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
                <LatestNews
                  title={posts[0].title ? posts[0].title : "No Posts Yet"}
                  coverImg={posts[0].coverImg ? posts[0].coverImg : ""}
                  excerpt={posts[0].excerpt ? posts[0].excerpt : "No Post Yet"}
                  id={posts[0].id ? posts[0].id : "No Posts Yet"}
                />
              </>
            )}
          </div>
          {/* BLOGS AND THERE CATEGORIES */}
          <div className="w-full justify-start items-center flex h-full mb-4">
            <div className="text-center h-full md:w-[20%] w-full text-white bg-[#fb4c35]">
              More News
            </div>
            <div className="justify-center">
              <Image height={40} src={bgimage} alt="img" />
            </div>
          </div>
          <div className="md:flex block md:flex-row flex-col flex-wrap md:justify-between md:items-start justify-center items-center md:w-auto w-full mb-10">
            {posts.length > 0 &&
              posts.slice(0, 4).map((post: any) => {
                return (
                  <SingleBlog
                    key={post.title}
                    thumbnail={post.coverImg}
                    title={post.title}
                    datePublished={post.category}
                    description={post.excerpt}
                    id={post.id}
                    category={post.category}
                    isPost
                  />
                );
              })}
          </div>

          {/* BLOGS AND THERE CATEGORIES END */}

          <div className="w-full justify-start items-center flex h-full mb-4">
            <div className="text-center h-full md:w-[20%] w-full text-white bg-[#fb4c35] whitespace-nowrap">
              YouTube Videos
            </div>
            <div className="justify-center">
              <Image height={40} src={bgimage} alt="img" />
            </div>
          </div>
          {/* YOUTUBE */}
          {youtubePosts ? (
            <>
              <div className="md:flex block md:flex-row flex-col flex-wrap md:justify-between md:items-start justify-center items-center md:w-auto w-full mb-10">
                <SingleBlog
                  thumbnail={youtubePosts[0].snippet.thumbnails.high.url}
                  title={youtubePosts[0].snippet.title}
                  datePublished={youtubePosts[0].snippet.publishAt}
                  description={youtubePosts[0].snippet.description}
                  id={youtubePosts[0].id.videoId}
                />
                <SingleBlog
                  thumbnail={youtubePosts[1].snippet.thumbnails.high.url}
                  title={youtubePosts[1].snippet.title}
                  datePublished={youtubePosts[1].snippet.publishAt}
                  description={youtubePosts[1].snippet.description}
                  id={youtubePosts[1].id.videoId}
                />
              </div>
              <div className="md:flex block md:flex-row flex-col flex-wrap md:justify-between md:items-start justify-center items-center md:w-auto w-full mb-10">
                <SingleBlog
                  thumbnail={youtubePosts[2].snippet.thumbnails.high.url}
                  title={youtubePosts[2].snippet.title}
                  datePublished={youtubePosts[2].snippet.publishAt}
                  description={youtubePosts[2].snippet.description}
                  id={youtubePosts[2].id.videoId}
                />
                <SingleBlog
                  thumbnail={youtubePosts[3].snippet.thumbnails.high.url}
                  title={youtubePosts[3].snippet.title}
                  datePublished={youtubePosts[3].snippet.publishAt}
                  description={youtubePosts[3].snippet.description}
                  id={youtubePosts[3].id.videoId}
                />
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center w-full h-[70vh]">
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
          )}
          <div
            className="py-5 bg-orange-600 my-10 cursor-pointer flext justify-center items-center text-white font-bold"
            onClick={() => Router.push("/allBlogs")}
          >
            <span className="color-white">More Posts</span>

            {/* <Rinnerspan>More Posts</Rinnerspan> */}
            <RBgImg></RBgImg>
          </div>
          {/* MORE NEWS */}
        </div>
        <div className="flex flex-1 h-full">
          <RightMenu posts={posts} />
        </div>
      </div>
    </div>
  );
}
