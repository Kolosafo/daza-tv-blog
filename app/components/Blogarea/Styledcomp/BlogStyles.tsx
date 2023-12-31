import React from "react";
import styled from "styled-components";

export const ShareLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  color: #fb4c35;
  @media only screen and (max-width: 767px) {
    display: none;
  }
  div {
    width: 90%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: medium;
    @media only screen and (max-width: 767px) {
      font-size: small;
    }
  }
  span {
    padding-left: 4px;
    padding-right: 4px;
    @media only screen and (max-width: 767px) {
      padding: 0;
    }
  }
`;
export const Title = styled.h2`
  font-size: 1.2rem; /* Equivalent to text-2xl in Tailwind */
  margin-bottom: 9px; /* Equivalent to 4px in Tailwind */
  font-weight: bold;
  cursor: pointer;
  color: black;
  &:hover ${ShareLink} {
    transition: 0.5s all ease-in-out;
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 49%;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover ${ShareLink} {
    transition: 0.5s all ease-in-out;
    color: white;
    background-color: #fb4c35;
  }
  &:hover ${Title} {
    transition: 0.5s all ease-in-out;
    color: #fb4c35;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
    justify-content: space-between;
  }
`;

export const CategorySpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  /* padding-left: 13px; */
  display: flex;
  align-items: center;
  padding-right: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: orangered;
    transition:  0.3s all ease-in-out;

    
  }

  div {
    width: 10px;
    height: 28px;
    padding: 5px;
    margin-right: 2px;
    background-color: orangered;
  }
`;

export const ImageContainer = styled.div``;

export const ContentContainer = styled.div`
  padding: 1.75rem; /* Equivalent to 7px in Tailwind */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff; /* Set your background color */
  @media only screen and (max-width: 767px) {
    padding: 10px;
  }
`;

export const Date = styled.small`
  display: flex;
  font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
  margin-bottom: 10px; /* Equivalent to 4px in Tailwind */
`;

export const Description = styled.span`
  font-size: 0.9rem;

  @media only screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  background-color: #fff; /* Set your background color */
  width: 100%;

  border: 1px solid #ccc; /* Set your border color */
`;
