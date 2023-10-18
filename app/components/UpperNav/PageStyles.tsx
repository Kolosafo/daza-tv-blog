import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  height: auto;
  width: 100%;

  font-size: 14px;
  color: #605e5e;
  background-color: #e6e7e8;
  box-sizing: border-box;
`;

export const NavContainer = styled.div`
  height: 100%;
  margin: auto;
  width: 70%;
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  margin: 0;
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  span {
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  margin-right: 5px;
  color: #fb4c35;
`;

export const MNav = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  font-size: 14px;
  color: #605e5e;
  background-color: #e6e7e8;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) {
   display: none;
  }
`