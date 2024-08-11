import { useState, FC, useEffect } from "react";
import Image from "next/image";
import {
  Comment,
  Con1,
  Con2,
  Con4,
  Con5,
  DateIcon,
  Face,
  Insta,
  RBgImg,
  Twit,
  Yt,
} from "./pageStyles";
import { useRouter } from "next/navigation";
import { Date } from "../Blogarea/Styledcomp/BlogStyles";
import { Circles } from "react-loader-spinner";

type Props = {
  posts: any[];
};
const RightMenu: FC<Props> = ({ posts }) => {
  const Router = useRouter();
  const [filtered, setFiltered] = useState(posts);
  const [activeCat, setActiveCat] = useState("");

  const filterPosts = (value: string) => {
    switch (value) {
      case "news":
        const newsFilter = posts.filter(
          (post: any) => post.category === "News"
        );
        const newsLimitedItems = newsFilter.slice(0, 4);
        setFiltered(newsLimitedItems);
        break;
      case "music":
        const musicFiilter = posts.filter(
          (post: any) => post.category === "Music"
        );
        const musicLimitedItems = musicFiilter.slice(0, 4);
        setFiltered(musicLimitedItems);
        break;
      case "movies":
        const movieFilter = posts.filter(
          (post: any) => post.category === "Movies"
        );
        const movieLimitedItems = movieFilter.slice(0, 4);
        setFiltered(movieLimitedItems);
        break;
      default:
        setFiltered(posts);
    }
  };
  useEffect(() => {
    setFiltered(posts);
  }, [posts]);
  return (
    <div className="flex flex-col w-full mt-10 ml-10">
      <div className="w-full flex flex-col items-start">
        <div className="flex w-full">
          <span className="text-white bg-black flex w-full text-center justify-center">
            Stay Connected
          </span>
          <RBgImg></RBgImg>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8 w-full">
          <Con1
            onClick={() => {
              Router.push(
                "https://web.facebook.com/p/DAZA-TV-100063743503213/?paipv=0&eav=Afa-KB7UI3M66zNPz4n7WIPDNXQxl02xLWXoVCko1kjN8ZBD9WlzUtvEXZLxr6Nfp4w&_rdc=1&_rdr"
              );
            }}
          >
            <Face />
            <div className="flex absolute flex-col items-center justify-center mt-20 opacity-0">
              <p className="text-xs">1,000</p>
              <span className="p-0 m-0 text-xs">Fans</span>
            </div>
          </Con1>
          <Con2
            onClick={() => {
              Router.push("https://www.tiktok.com/@nuruddeendaza");
            }}
          >
            <Twit />
            <div className="flex absolute flex-col items-center justify-center mt-20 opacity-0">
              <p className="text-xs">800</p>
              <span className="p-0 m-0 text-xs">Fans</span>
            </div>
          </Con2>
          {/* <Con3>
            <Linkd />
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con3> */}
          <Con4
            onClick={() => {
              Router.push("https://www.instagram.com/nuruddeendaza/");
            }}
          >
            <Insta />
            <div className="flex absolute flex-col items-center justify-center mt-20 opacity-0">
              <p className="text-xs">1,000</p>
              <span className="p-0 m-0 text-xs">Fans</span>
            </div>
          </Con4>
          <Con5
            onClick={() => {
              Router.push(
                "https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
              );
            }}
          >
            <Yt />
            <div className="flex absolute flex-col items-center justify-center mt-20 opacity-0">
              <p className="text-xs">1,200</p>
              <span className="p-0 m-0 text-xs">Fans</span>
            </div>
          </Con5>
        </div>

        <div className="my-5 cursor-pointer">
          <div className="text-white bg-black flex w-full text-center justify-center">
            Web Series
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full">
          <div className="flex-1 flex justify-center items-center">
            <Comment />
          </div>
          <div className="bg-white" style={{ flex: 3 }}>
            <span className="p-2 ml-2 text-base m-0 mt-2 font-semibold">
              Addini na S1-E6
            </span>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full">
          <div className="flex-1 flex justify-center items-center">
            <Comment />
          </div>
          <div className="bg-white" style={{ flex: 3 }}>
            <span className="p-2 ml-2 text-base m-0 mt-2 font-semibold">
              So Da Hawaye S2-E3
            </span>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full">
          <div className="flex-1 flex justify-center items-center">
            <Comment />
          </div>
          <div className="bg-white" style={{ flex: 3 }}>
            <span className="p-2 ml-2 text-base m-0 mt-2 font-semibold">
              Addini na S1- E5
            </span>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full">
          <div className="flex-1 flex justify-center items-center">
            <Comment />
          </div>
          <div className="bg-white" style={{ flex: 3 }}>
            <span className="p-2 ml-2 text-base m-0 mt-2 font-semibold">
              Autan Yen Jarida
            </span>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </div>
        </div>
        <div className="flex justify-center bg-white items-center w-full">
          <div className="flex-1 flex justify-center items-center">
            <Comment />
          </div>
          <div className="bg-white" style={{ flex: 3 }}>
            <span className="p-2 ml-2 text-base m-0 mt-2 font-semibold">
              Addini na S1- E4
            </span>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </div>
        </div>
        <div className=" mt-5 mb-4">
          <div className="flex bg-white text-black">
            <div
              className={`${
                activeCat === "news"
                  ? "bg-[#fb4c35] text-black hover:text-white"
                  : "text-black"
              } hover:bg-gray-700 cursor-pointer px-5 border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
              onClick={() => {
                setActiveCat("news");
                filterPosts("news");
              }}
            >
              News
            </div>
            <div
              className={`${
                activeCat === "movies"
                  ? "bg-[#fb4c35] text-black hover:text-white"
                  : "text-black"
              } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
              onClick={() => {
                setActiveCat("movies");
                filterPosts("movies");
              }}
            >
              Movies
            </div>
            <div
              className={`${
                activeCat === "music"
                  ? "bg-[#fb4c35] text-black hover:text-white"
                  : "text-black"
              } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
              onClick={() => {
                setActiveCat("music");
                filterPosts("music");
              }}
            >
              Music
            </div>
          </div>
          {filtered.length > 0 ? (
            filtered.map((post: any) => {
              return (
                <div className="bg-white" style={{ flex: 3 }} key={post.id}>
                  <div className="p-2 flex">
                    <Image
                      width={50}
                      height={50}
                      src={post.coverImg}
                      alt="coverImg"
                      className="object-cover"
                    />
                    <span className="ml-2">
                      <div className="text-xs font-semibold text-black">
                        {" "}
                        {post.excerpt.length > 20
                          ? `${post.excerpt.slice(0, 20)}....`
                          : post.excerpt}
                      </div>
                      <Date>
                        {" "}
                        <DateIcon />
                        {post.category}
                      </Date>
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <span>No posts here</span>
            </div>
          )}

          {/* <RCommentCon>
            <div>
              <Image width={50} height={50} src={"/og-logo2"} alt="ggs" />
              <span>
                <SmallTitle>HD Headphones</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
          <RCommentCon>
            <div>
              <Image width={50} height={50} src={"/og-logo2"} alt="ggs" />
              <span>
                <SmallTitle>Lady enjoyin the sky</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon>
          <RCommentCon>
            <div>
              <Image width={50} height={50} src={"/og-logo2"} alt="ggs" />
              <span>
                <SmallTitle>Music to the soul</SmallTitle>
                <Date>
                  {" "}
                  <DateIcon />
                  February 19, 2019
                </Date>
              </span>
            </div>
          </RCommentCon> */}
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
