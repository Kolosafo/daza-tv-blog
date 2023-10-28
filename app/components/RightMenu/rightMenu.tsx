import { useState, FC, useEffect } from "react";
import Image from "next/image";
import {
  Comment,
  CommentCon,
  Con1,
  Con2,
  Con3,
  Con4,
  Con5,
  Con6,
  ConDiv,
  DateIcon,
  Face,
  Insta,
  LCon,
  RBgImg,
  RCommentCon,
  RCon,
  RContainer,
  RTitle,
  RWrap,
  RWrap2,
  Rinnerspan,
  Rsection,
  SmallTitle,
  SocialCon,
  TopSection,
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
    <RCon className="mt-10 ml-10">
      <RContainer>
        <RWrap>
          <Rinnerspan>Stay Connected</Rinnerspan>
          <RBgImg></RBgImg>
        </RWrap>
        <SocialCon>
          <Con1
            onClick={() => {
              Router.push(
                "https://web.facebook.com/p/DAZA-TV-100063743503213/?paipv=0&eav=Afa-KB7UI3M66zNPz4n7WIPDNXQxl02xLWXoVCko1kjN8ZBD9WlzUtvEXZLxr6Nfp4w&_rdc=1&_rdr"
              );
            }}
          >
            <Face />
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con1>
          <Con2
            onClick={() => {
              Router.push("https://www.tiktok.com/@nuruddeendaza");
            }}
          >
            <Twit />
            <ConDiv>
              <p>8,000</p>
              <span>Fans</span>
            </ConDiv>
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
            <ConDiv>
              <p>1,000</p>
              <span>Fans</span>
            </ConDiv>
          </Con4>
          <Con5
            onClick={() => {
              Router.push(
                "https://www.youtube.com/channel/UCb4BvFRquPfEEmpwFYiMAog"
              );
            }}
          >
            <Yt />
            <ConDiv>
              <p>1,200</p>
              <span>Subs</span>
            </ConDiv>
          </Con5>
          {/* <Con6>
            <Comment />
            <ConDiv>
              <p>0</p>
              <span>Fans</span>
            </ConDiv>
          </Con6> */}
        </SocialCon>
        {/* <RWrap2 onClick={() => Router.push("/allBlogs")}>
          <Rinnerspan>More Posts</Rinnerspan>
          <RBgImg></RBgImg>
        </RWrap2> */}
        {/* <RContainer>
          <ImageContainer>
            <Image width={330} src={Rimg} alt="imghere" />
          </ImageContainer>
          <ContentContainer>
            <Title>The Best Sports For A Hard...</Title>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </ContentContainer>
        </RContainer> */}
        <RWrap2>
          <Rinnerspan>Web Series</Rinnerspan>
        </RWrap2>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Addini na S1-E6</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>So Da Hawaye S2-E3</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Addini na S1- E5</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Autan Yen Jarida</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <CommentCon>
          <LCon>
            <Comment />
          </LCon>
          <RCommentCon>
            <RTitle>Addini na S1- E4</RTitle>
            <Date>
              {" "}
              <DateIcon />
              February 19, 2019
            </Date>
          </RCommentCon>
        </CommentCon>
        <Rsection>
          <TopSection>
            <div
              className={`${
                activeCat === "news"
                  ? "bg-[#fb4c35] text-black hover:text-white"
                  : "text-black"
              } hover:bg-gray-700 cursor-pointer border-r-2 border-solid border-gray-600 h-full  p-6 items-center justify-between flex transition duration-150 ease-out`}
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
          </TopSection>
          {filtered.length > 0 ? (
            filtered.map((post: any) => {
              return (
                <RCommentCon key={post.id}>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      src={post.coverImg}
                      alt="coverImg"
                      className="object-cover"
                    />
                    <span>
                      <SmallTitle>
                        {" "}
                        {post.excerpt.length > 20
                          ? `${post.excerpt.slice(0, 20)}....`
                          : post.excerpt}
                      </SmallTitle>
                      <Date>
                        {" "}
                        <DateIcon />
                        {post.category}
                      </Date>
                    </span>
                  </div>
                </RCommentCon>
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
        </Rsection>
      </RContainer>
    </RCon>
  );
};

export default RightMenu;
