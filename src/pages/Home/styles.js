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
  width: 100%;
  &:nth-child(2n + 1),
  &:nth-child(3n + 1) {
    text-align: left;
  }
  &:nth-child(2n + 1) {
    margin: 3% 0 0;
  }
  @media (min-width: 769px) {
    font-size: 15px;
    line-height: 21px;
  }
`;
