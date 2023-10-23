import styled from "styled-components";

export const FContainer = styled.div`
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FCon = styled.div`
  width: 70%;
  display: flex;
  padding: 80px 0 75px;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InnerCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 15px;
  flex: 1;

  div {
    padding: 10px;
  }
  h2 {
    text-align: start;
    font-size: 20px;
    font-weight: 700;
    color: white;
    padding-bottom: 10px;
  }

  @media only screen and (max-width: 767px) {
    padding-top: 20px;
  }
`;

export const InnerConDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid grey;

  div {
    text-align: start;
    h2 {
      cursor: pointer;
      text-align: start;
      font-size: 17px;
      font-weight: 700;
      color: white;
      &:hover {
        color: #fb4c35;
        transition: 0.3s ease-in-out;
      }
    }
    small {
      display: flex;
      line-height: 18px;
    }
  }

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
  }
`;
export const Comment = styled.div`
  border-bottom: 2px solid gray;
  padding: 10px;
  width: 100%;
  &:hover {
    padding-left: 15px;
    transition: 0.3s ease-in-out;
    color: #fb4c35;
  }
`;
export const Contact = styled.div`
  margin-top: 15px;
  /* display: flex;
  flex-direction: column; */
  div {
    padding: 0;
    margin-left: 0;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 10px;
    outline: none;
    background-color: #353535;
    color: #6c6a6a;
  }
  button {
    color: #fff;
    font-size: 18px;
    padding: 15px;
    background-color: #fb4c35;
    transition: all 0.15s ease-out;

    &:hover {
      color: black;
      transition: all 0.15s ease-out;
    }
  }
`;
