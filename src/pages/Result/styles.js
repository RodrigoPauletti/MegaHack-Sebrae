import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

import { Section as SectionInitial, WhiteCard } from "../../styles.js";

import "./slick-styles.css";

export const Section = styled(SectionInitial)`
  margin: 0 !important;
`;

export const ResultGrades = styled.div``;

export const Text = styled.p`
  margin: 0;
  font-family: ${fonts.raleway};
  font-size: 16px;
  font-weight: 500;
`;

export const GradeContainer = styled.div`
  text-align: center;
  margin: 48px 0 32px;
`;

export const GradeText = styled(Text)`
  color: ${colors.gray};
  font-size: 65px;
  font-weight: 800;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 100%;
  border: 13px solid;
  border-color: ${props =>
    props.average < 3
      ? colors.red
      : props.average < 5
      ? colors.yellow
      : colors.green};
`;

export const YourGrade = styled(Text)`
  margin-top: 24px;
  color: ${colors.gray};
`;

export const ResultText = styled(Text)`
  margin-top: 8px;
  color: ${colors.gray};
  font-size: 21px;
  color: ${props =>
    props.average < 3
      ? colors.red
      : props.average < 5
      ? colors.yellow
      : colors.green};
`;

export const ResultDescription = styled(Text)`
  color: ${colors.secondary};
  white-space: pre-line;
`;

export const CategoriesResultsGrade = styled.div`
  width: 100%;
`;
export const CategoryResultGrade = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const CategoryResult = styled.div`
  width: 80%;
`;

export const CategoryName = styled(Text)`
  color: ${props =>
    props.average < 3
      ? colors.red
      : props.average < 5
      ? colors.yellow
      : colors.green};
  font-weight: 600;
`;

export const CategoryResultDescription = styled(Text)`
  margin-top: 16px;
  color: ${colors.secondary};
`;

export const CategoryGrade = styled.div`
  background: ${colors.white};
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 6px solid ${colors.black};
  border-color: ${props =>
    props.average < 3
      ? colors.red
      : props.average < 5
      ? colors.yellow
      : colors.green};
`;

export const CategoryGradeText = styled(Text)`
  color: ${colors.gray};
  font-size: 22px;
  font-weight: 800;
`;

// export const Chat = styled(WhiteCard)`
//   margin-top: 62px;
// `;

// export const ChatTitle = styled(Text)`
//   color: ${colors.gray};
//   font-size: 21px;
//   font-weight: 600;
// `;

// export const ChatText = styled(Text)`
//   margin: 7px 0 19px;
//   color: ${colors.secondary};
//   font-size: 14px;
// `;
