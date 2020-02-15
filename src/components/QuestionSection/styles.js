import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";
import {
  Section as SectionInitial,
  Form as FormInitial
} from "../../styles.js";

export const Section = styled(SectionInitial)`
  align-items: baseline;
`;

export const Form = styled(FormInitial)`
  margin: 0;
`;

export const QuestionCategory = styled.h1`
  font-family: ${fonts.raleway};
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 25px;
  color: ${colors.primary};
`;

export const ExplanationGrade = styled.p`
  font-family: ${fonts.raleway};
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 32px;
  color: ${colors.secondary};
`;

export const ExplanationGradeSpan = styled.span`
  display: block;
  font-style: italic;
`;

export const CategoryTitle = styled.p`
  font-family: ${fonts.raleway};
  font-size: 21px;
  font-weight: 700;
  margin: 0;
  color: ${colors.secondary};
`;
