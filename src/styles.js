import styled, { createGlobalStyle } from "styled-components";

import fonts from "./fonts.js";
import { colors } from "./variables.js";

import logoSebrae from "./assets/logo-sebrae.png";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  background: ${colors.background};
  // height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 320px;
  padding: 20px;
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
    margin-top: 75px;
  }
  &:hover {
    cursor: pointer;
    background: ${colors.white};
    color: ${colors.primary};
    transition: all 0.3s ease;
  }
`;
