import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  color: ${colors.secondary};
  font-family: ${fonts.raleway};
  font-weight: 500;
  font-size: 14px;
`;

export const Input = `
  background: #FFF;
  padding: 10px 20px;
  margin-top: 8px;
  height: 28px;
  font-family: ${fonts.raleway};
  font-size: 14px;
  color: ${colors.secondary};
  border: 1px solid ${colors.sliderBackground};
  border-radius: 8px;
  outline: none;
  transition: all .3s ease;
  &:hover, &:focus {
    border-color: ${colors.primary};
    transition: all .3s ease;
  }
`;
