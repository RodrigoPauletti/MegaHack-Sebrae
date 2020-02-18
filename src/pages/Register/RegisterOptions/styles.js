import styled from "styled-components";

import {
  ButtonsContainer as ButtonsContainerInitial,
  Button as ButtonInitial
} from "../../../styles.js";

export const RegisterOptionsContainer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled(ButtonsContainerInitial)`
  margin-top: 25px;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled(ButtonInitial)`
  font-size: 18px;
`;
