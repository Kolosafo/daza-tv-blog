"use client";
import { useState, useEffect } from "react";
import SingleBlog from "./SingleBlog";
import {
  BgImg,
  BlogAreaCon,
  BlogCon,
  BlogWrapper,
  Container,
  InnerSpan,
  MainBlogCon,
  MenuCon,
} from "./Styledcomp/pageStyles";
import bgimage from "./assets/11231.png";
import Image from "next/image";
import RecentBlog from "./RecentBlog";
import LatestNews from "./LatestNews";
import RightMenu from "../RightMenu/rightMenu";
import { useRouter } from "next/navigation";
import { getPosts } from "@/app/utils/getBlogs";
import { Circles } from "react-loader-spinner";
import { getYouTubeThumbnails } from "@/app/utils/ytApi";
import { RBgImg, RWrap2, Rinnerspan } from "../RightMenu/pageStyles";
import { ToastContainer, toast } from "react-toastify";

export default function BlogArea() {
  const notify = (arg: any) => toast(arg);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const [youtubePosts, setYouTubePosts] = useState<any>(null);

  const getAllPosts = async () => {
    setLoading(true);
    const res = await getPosts();
    setPosts(res);
    const youtubeVideos = await getYouTubeThumbnails();
    setYouTubePosts(youtubeVideos);
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
    <BlogAreaCon>
      <BlogWrapper>
        <MainBlogCon>
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
          <Container>
            <InnerSpan>Latest News</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          <BlogCon>
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
          </BlogCon>
          {/* BLOGS AND THERE CATEGORIES */}
          <Container>
            <InnerSpan>More News</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          <BlogCon>
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
          </BlogCon>

          {/* BLOGS AND THERE CATEGORIES END */}

          <Container>
            <InnerSpan className=" whitespace-nowrap">YouTube Videos</InnerSpan>
            <BgImg>
              <Image height={40} src={bgimage} alt="img" />
            </BgImg>
          </Container>
          {/* YOUTUBE */}
          {youtubePosts ? (
            <>
              <BlogCon>
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
              </BlogCon>
              <BlogCon>
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
              </BlogCon>
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
          <RWrap2
            className="py-5 bg-orange-600 flext justify-center items-center text-white font-bold"
            onClick={() => Router.push("/allBlogs")}
          >
            <span className="color-white">More Posts</span>

            {/* <Rinnerspan>More Posts</Rinnerspan> */}
            <RBgImg></RBgImg>
          </RWrap2>
          {/* MORE NEWS */}
        </MainBlogCon>
        <MenuCon>
          <RightMenu />
        </MenuCon>
      </BlogWrapper>
    </BlogAreaCon>
  );
}
