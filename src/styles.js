import styled, { createGlobalStyle, keyframes } from "styled-components";

import fonts from "./fonts.js";
import { colors } from "./variables.js";

import logoSebrae from "./assets/logo-sebrae.png";
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
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  animation: ${animationName} 0.8s;
  @media (min-width: 769px) {
    max-width: 650px;
  }
  @media (min-width: 1035px) {
    max-width: 990px;
  }
`;

export const Logo = styled.img.attrs({
  src: logoSebrae
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
  margin-top: 50px;
  width: 100%;
`;

export const Button = styled.button.attrs({
  type: "submit"
})`
  border: 0;
  background: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 20px;
  width: 100%;
  color: ${colors.white};
  font-family: ${fonts.raleway};
  font-size: 21px;
  font-weight: 700;
  border-radius: 8px;
  margin: 15px 0;
  transition: all 0.3s ease;
  &:first-of-type {
    margin-top: 5%;
  }
  &:hover {
    cursor: pointer;
    background: ${colors.white};
    color: ${colors.primary};
    transition: all 0.3s ease;
  }
`;
