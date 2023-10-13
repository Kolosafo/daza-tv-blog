import { FC, useState, useEffect } from "react";
import {
  Container,
  ContentContainer,
  Date,
  Description,
  Footer,
  ImageContainer,
  ShareLink,
  Title,
} from "./Styledcomp/BlogStyles";
import Image from "next/image";
import onion from "../Slider/onion1.jpg";
import men from "../Slider/men1.jpg";
import img from "./assets/the-best-sports-for-a-demanding-workout-1024x569.jpg";
import {
  BotCon,
  BottomDiv,
  ImgCon,
  RecentShareLink,
  TextCon,
} from "./Styledcomp/RecentBlogsStyles";
import { DateIcon } from "../RightMenu/pageStyles";
import { useRouter } from "next/navigation";
import { getPosts } from "@/app/utils/getBlogs";

type Props = {
  position: number;
};
const RecentBlog: FC<Props> = ({ position }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<any>([]);
  const Router = useRouter();
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
    <Container>
      <ImageContainer>
        <Image
          width={600}
          src={
            position === 1
              ? posts[0].coverImg
              : posts[1].coverImg
              ? posts[1].coverImg
              : posts[0].coverImg
          }
          alt="img"
        />
      </ImageContainer>
      <ContentContainer>
        <Title>
          {position === 1
            ? posts[0].title
            : posts[1].title
            ? posts[1].title
            : posts[0].title}
        </Title>
        <Date>
          {" "}
          <DateIcon />
          {position === 1
            ? posts[0].excerpt
            : posts[1].excerpt
            ? posts[1].excerpt
            : posts[0].excerpt}
        </Date>
      </ContentContainer>
    </Container>
  );
};
export default RecentBlog;
