import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

export const OpeningText = styled.p`
  color: ${colors.gray};
  font-family: ${fonts.raleway};
  font-size: 13px;
  font-weight: 500;
  margin: 38px 0 0;
  line-height: 17px;
  text-align: justify;
  width: 100%;
  &:last-of-type {
    margin-bottom: 20px;
  }
  @media (min-width: 769px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
