import styled, { createGlobalStyle, keyframes } from "styled-components";

import fonts from "./fonts.js";
import { colors } from "./variables.js";

import logoRaioX from "./assets/logo-raiox.svg";
import arrowLeft from "./assets/arrow-left.svg";

const animationName = keyframes`
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  background: ${colors.background};
  display: flex;
  justify-content: center;
  min-height: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  animation: ${animationName} 0.8s;
  @media (max-width: 320px) {
    max-width: 250px;
  }
  @media (min-width: 769px) {
    margin-top: 50px;
    max-width: 650px;
  }
  @media (min-width: 1024px) {
    max-width: 990px;
  }
`;

export const Logo = styled.img.attrs({
  src: logoRaioX
})`
  width: 100%;
  max-width: 170px;
`;

export const Text = styled.p`
  color: ${colors.primary};
  font-family: ${fonts.raleway};
`;

export const BackButton = styled.img.attrs({
  src: arrowLeft
})`
  height: 24px;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  @media (min-width: 769px) {
    margin-top: 50px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button.attrs({
  type: "submit"
})`
  border: 0;
  background: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 20px;
  width: 45%;
  color: ${colors.background};
  font-family: ${fonts.raleway};
  font-size: 21px;
  font-weight: 700;
  border-radius: 8px;
  margin: 15px 0;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background: transparent;
    color: ${colors.primary};
    transition: all 0.3s ease;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`;

export const CardList = styled.div`
  display: flex;
  align-items: start;
  margin-top: 25px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

export const CardsContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextInternal = styled.p`
  margin: 0;
  font-family: ${fonts.raleway};
  font-size: 16px;
  font-weight: 500;
`;

export const HeaderTitle = styled(TextInternal)`
  color: ${colors.gray};
  font-size: 21px;
  font-weight: 600;
`;

export const SeeAll = styled(TextInternal)`
  color: ${colors.seeAll};
  font-weight: 600;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Link = styled.a`
  font-family: ${fonts.raleway};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const WhiteCard = styled.div`
  border-radius: 20px;
  background: ${colors.white};
  padding: 24px;
  box-shadow: 0 3px 6px #0000001c;
`;
