import { FC } from "react";
import { BotCon, MainCon, TopCon } from "./Styledcomp/LatestNewsStyles";
import Image from "next/image";
import girl1 from "./assets/what-we-should-really-be-playing-on-rnb-stations-970x500.jpg";
import {
  Footer,
  ContentContainer,
  Date,
  Description,
  ShareLink,
  Title,
} from "./Styledcomp/BlogStyles";
import { BsFillShareFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { DateIcon } from "../RightMenu/pageStyles";
import { useRouter } from "next/navigation";
type Props = {
  coverImg: string;
  title: string;
  excerpt: string;
  id: string;
};
const LatestNews: FC<Props> = ({ coverImg, title, excerpt, id }) => {
  const Router = useRouter();
  return (
    <MainCon>
      <TopCon>
        <Image
          width={200}
          height={200}
          className="w-full"
          src={coverImg}
          alt="coverImg"
        />
      </TopCon>
      <BotCon>
        <ContentContainer>
          <Title
            onClick={() => {
              title !== "No Posts Yet"
                ? Router.push(`/BlogDetails/?id=${id}`)
                : "";
            }}
          >
            {title}
          </Title>
          {/* <Date>
            {" "}
            <DateIcon />
            February 19, 2019
          </Date> */}
          <Description>{excerpt}</Description>
        </ContentContainer>
        <Footer>
          <ShareLink>
            <div>
              <BsFillShareFill /> <span /> share /<span /> <BiCommentDetail />
              <span /> 4 comment
            </div>
          </ShareLink>
        </Footer>
      </BotCon>
    </MainCon>
  );
};

export default LatestNews;
