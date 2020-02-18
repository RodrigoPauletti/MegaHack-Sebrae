import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

import { Input as InputInitial } from "../Form/styles.js";

export const Input = styled.input.attrs({})`
  ${InputInitial}
`;

export const InputStyle = {
  background: `#FFF`,
  padding: `10px 20px`,
  "margin-top": `8px`,
  height: `28px`,
  "font-family": `${fonts.raleway}`,
  "font-size": `14px`,
  color: `${colors.secondary}`,
  border: `1px solid ${colors.sliderBackground}`,
  "border-radius": `8px`,
  outline: `none`,
  transition: `all .3s ease`,
  "&:hover, &:focus": {
    "border-color": `${colors.primary}`,
    transition: "all .3s ease"
  }
};
