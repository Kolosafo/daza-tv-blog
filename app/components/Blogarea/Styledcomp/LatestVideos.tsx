import styled from "styled-components";

export const VCon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 0px;
  justify-content: space-around;
`;
export const ImageCon = styled.div`
  position: relative; /* Add this line */
  width: 100%;
  flex: 1;
  scale: calc(1.2);
`;
export const VTitle = styled.h1`
  font-size: x-large;
  padding-bottom: 20px;
`;
export const Vsmall = styled.p`
  font-size: 13px;

  span {
    &:hover {
      color: #fb4c35;
      transition: 0.3s ease-in-out;
    }
  }
`;

export const TextCon = styled.div`
  position: absolute;
 
  width: 31.6%;
  height: 44%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  background-color: rgba(8, 7, 6, 0.66);
  
    &:hover{

    }
`;

export const TextDiv = styled.div`
  position: absolute;
  width: 35%;

`;
