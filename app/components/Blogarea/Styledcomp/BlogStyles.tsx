import React from "react";
import styled from "styled-components";

export const ShareLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: medium;
  color: #fb4c35;

  div {
    width: 90%;

    display: flex;
    justify-content: start;
    align-items: center;
    font-size: medium;
    
  }
  span {
    padding-left: 4px;
    padding-right: 4px;
  }
`;
export const Title = styled.h2`
  font-size: 1.25rem; /* Equivalent to text-2xl in Tailwind */
  margin-bottom: 9px; /* Equivalent to 4px in Tailwind */
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 35%;
  padding-top: 1.25rem;
  margin-right: 30px;

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

export const ImageContainer = styled.div``;

export const ContentContainer = styled.div`
  padding: 1.75rem; /* Equivalent to 7px in Tailwind */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff; /* Set your background color */
`;

export const Date = styled.small`
  font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
  margin-bottom: 10px; /* Equivalent to 4px in Tailwind */
`;

export const Description = styled.span`
  font-size: 1.125rem; /* Equivalent to text-lg in Tailwind */
`;

export const Footer = styled.div`
  background-color: #fff; /* Set your background color */
  width: 100%;

  border: 1px solid #ccc; /* Set your border color */
`;
