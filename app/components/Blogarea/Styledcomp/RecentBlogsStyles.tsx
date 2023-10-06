import styled from "styled-components";

export const RecentShareLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fb4c35;
  color: #fff;
  width: 100%;
  @media only screen and (max-width: 767px) {
    display: none;
  }
  p {
    padding-right: 10px;
    &:hover {
      color: #121212;

      transition: 0.3s ease-in-out;
    }
  }
  span {
    padding-right: 30px;
  }
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const BotCon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0 10px 0;
  width: 100%;
  border-bottom: 2px solid lightgray;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
}
`;

export const ImgCon = styled.div`
  width: 30%;
  @media only screen and (max-width: 767px) {
    width: 100%;

}
`;
export const TextCon = styled.div`
  width: 90%;
  padding-left: 20px;
  @media only screen and (max-width: 767px) {
    
    padding: 0;
}
  h2 {
    font-size: 17px;
    &:hover {
      color: #fb4c35;
      transition: 0.3s ease-in-out;
      padding-left: 15px;
      @media only screen and (max-width: 767px) {
        padding-left: 0;
      }
    }
  }
`;
