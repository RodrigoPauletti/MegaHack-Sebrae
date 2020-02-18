import styled from "styled-components";

import { Form as FormInitial, Button as ButtonInitial } from "../../styles.js";

export const QuestionsListContainer = styled.div`
  width: 100%;
`;

export const QuestionContainer = styled.div`
  width: 100%;
`;

export const Form = styled(FormInitial)`
  margin-top: 32px;
`;

export const Button = styled(ButtonInitial)`
  @media (max-width: 768px) {
    font-size: 18px;
    width: 45%;
  }
`;
