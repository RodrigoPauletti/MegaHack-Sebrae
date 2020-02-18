import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

export const OpeningText = styled.p`
  color: ${colors.gray};
  font-family: ${fonts.raleway};
  font-size: 12px;
  font-weight: 500;
  margin: 38px 0 0;
  line-height: 17px;
  text-align: center;
  &:nth-child(2n + 1),
  &:nth-child(3n + 1) {
    text-align: left;
  }
  &:nth-child(2n + 1) {
    margin: 12px 0 0;
  }
`;
