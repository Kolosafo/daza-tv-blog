import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  justify-content: start;
  align-items: center;
  display: flex;
    height: 100%;
  margin-bottom: 15px;
  margin-top: 10px; 
  @media only screen and (max-width: 767px) {

  }
`;
export const BgImg = styled.div`
  width: 100%;
  object-fit: fill;
  height: 100%;
  justify-content: center; 
  @media only screen and (max-width: 767px) {
    width: 0%;
  
}
`;

export const InnerSpan = styled.span`
  text-align: center;
  height: 100%;
  width: 20%;
  color: #fff;

  background-color: #fb4c35;
  padding: 7px 10px; /* Adjust  according to your design */

  @media only screen and (max-width: 767px) {
    width: 100%;
}
`;

export const BlogCon = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 40px;

  @media only screen and (max-width: 767px) {
    display: block;
    width: 100%;
    justify-content: center;
    align-items: center;
  
}

`
