"use client";
import { useEffect, useState } from "react";
import {
  BlogDetailsCon,
  Face1,
  Insta1,
  Linkd1,
  MidDiv,
  QuoteI,
  TitleText,
  Twit1,
} from "./BlogDetailsStyles";
import {
  BgImg,
  BlogWrapper,
  InnerSpan,
  MainBlogCon,
  MenuCon,
} from "../../../components/Blogarea/Styledcomp/pageStyles";
import RightMenu from "../../../components/RightMenu/page";
import { Container } from "../../../components/Blogarea/Styledcomp/BlogStyles";
import Image from "next/image";
import {
  DetailsWrap,
  DetailsImg,
  DetailsImgDiv,
  DetailsSection,
  DetailsTitle,
  DetailsPTag,
  DetailsMidSec,
  DetailsMidImg,
  DetailsImgTextCon,
  MidConTitle,
  MidConP,
  QuoteDiv,
  QuoteIcon,
  QuoteText,
  SocialConDiv,
  SocialConText,
  SocialConIcons,
  DCon1,
  DCon2,
  DCon3,
  DCon4,
  CommentSection,
  CHeader,
  CTextarea,
  InputAreas,
  Input1,
  Input2,
  Input3,
  CSubmit,
  Related,
  Rdiv,
  Rimg,
  Rtext,
} from "./BlogDetailsStyles";
import water from "./we-went-deep-underground-for-this-shot.jpg";
import manonwater from "./post-single-img-1-300x203.jpg";
import { useSearchParams } from "next/navigation";
import { BlogCategory } from "@/app/createBlog/page";
import { doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import { db } from "@/app/firebase";
import { Circles } from "react-loader-spinner";
import ReactHtmlParser from "react-html-parser";


export default function BlogDetailsComp() {
  const params: any = useSearchParams();
  const notify = (arg: any) => toast(arg);

  const [postContentValue, setPostContentValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [coverImg, setCoverImg] = useState<any>("");
  const [status, setStatus] = useState("");
  const [blogId, setBlogId] = useState("");
  const [category, setCategory] = useState<BlogCategory>(BlogCategory.News);

  useEffect(() => {
    const id = params.get("id");
    const docRef = doc(db, "posts", id);
    setLoading(true);
    const getPost = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const res = docSnap.data();

        setTitle(res.title);
        setExcerpt(res.excerpt);
        setPostContentValue(res.content);
        setCoverImg(res.coverImg);
        setStatus(res.status);
        setBlogId(id);
        setCategory(res.category);
        setLoading(false);
      } else {
        notify("Post Not Found");
      }
    };
    getPost();
  }, [params]);
  return (
    <>
      <ToastContainer />
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
        <BlogDetailsCon>
          <ToastContainer />
          <BlogWrapper>
            <MainBlogCon>
              <TitleText>{title}</TitleText>
              <DetailsWrap>
                <DetailsImg>
                  <DetailsImgDiv>
                    <Image
                      width={300}
                      height={300}
                      src={coverImg}
                      alt="coverImg"
                    />
                  </DetailsImgDiv>
                </DetailsImg>
                <DetailsSection>
                  <DetailsTitle>{title}</DetailsTitle>
                  <DetailsPTag>{excerpt}</DetailsPTag>

                  <DetailsMidSec>
                    {" "}
                    {ReactHtmlParser(postContentValue)}
                  </DetailsMidSec>
                </DetailsSection>
              </DetailsWrap>
              <CommentSection>
                <CHeader>Leave A Comment</CHeader>
                <CTextarea placeholder="Type Message:" />
                <InputAreas>
                  <Input1 placeholder="Name:" />
                  <Input2 placeholder="Email:" />
                  <Input3 placeholder="Website:" />
                </InputAreas>
                <CSubmit onClick={() => notify("Comment added")}></CSubmit>
              </CommentSection>
            </MainBlogCon>
            <MenuCon>
              <RightMenu />
            </MenuCon>
          </BlogWrapper>
        </BlogDetailsCon>
      )}
    </>
  );
}
