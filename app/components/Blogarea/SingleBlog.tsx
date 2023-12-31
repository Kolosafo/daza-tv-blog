"use client";
import Image from "next/image";
import { FC } from "react";
import img from "./assets/we-went-deep-underground-for-this-shot-600x384.jpg";
import {
  CategorySpan,
  Container,
  ContentContainer,
  Date,
  Description,
  Footer,
  ImageContainer,
  ShareLink,
  Title,
} from "./Styledcomp/BlogStyles";
import { BsFillShareFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { DateIcon } from "../RightMenu/pageStyles";
import { useRouter } from "next/navigation";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  datePublished: string;
  id: string;
  category?: string;
  isPost?: boolean;
};
const SingleBlog: FC<Props> = ({
  title,
  thumbnail,
  id,
  description,
  datePublished,
  category,
  isPost
}) => {
  const Router = useRouter();
  return (
    <Container>
      {category && (
        <CategorySpan>
          <div
            style={{
             
            }}
          ></div>
          {category}
        </CategorySpan>
      )}

      <ImageContainer>
        <img width={600} height={300} src={thumbnail} alt="thumbnail" />
      </ImageContainer>
      <ContentContainer>
        <Title
          onClick={() => {
            !isPost
              ? Router.push(`http://www.youtube.com/watch?v=${id}`)
              : Router.push(`/BlogDetails/?id=${id}`);
          }}
        >
          {title}
        </Title>
        <Date>
          {" "}
          <DateIcon />
          {datePublished}
        </Date>
        <Description>{description}</Description>
      </ContentContainer>
      <Footer>
        <ShareLink>
          <div>
            <BsFillShareFill /> <span /> share /<span /> <BiCommentDetail />
            <span /> 4 comment
          </div>
        </ShareLink>
      </Footer>
    </Container>
  );
};

export default SingleBlog;
