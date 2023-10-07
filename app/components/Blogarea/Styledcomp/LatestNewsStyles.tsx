import styled from "styled-components";
import { ShareLink,Title } from "./BlogStyles";
export const MainCon = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const TopCon = styled.div`
  display: flex;
  flex: 2;
 

`;
export const BotCon = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
 

  &:hover ${ShareLink} {
    transition: 0.5s all ease-in-out;
    color: white;
    background-color: #fb4c35;
  }
  &:hover ${Title} {
    transition: 0.5s all ease-in-out;
    color: #fb4c35;
  }
`;


