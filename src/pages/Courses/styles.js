import styled from "styled-components";

import { colors } from "../../variables.js";

import {
  Header,
  HeaderTitle,
  CardsContainer,
  CardList,
  Link,
  Text
} from "../../styles.js";

export const Courses = styled(CardsContainer)``;

export const CoursesHeader = styled(Header)`
  margin-bottom: 25px;
`;

export const CoursesTitle = styled(HeaderTitle)``;

export const CoursesCardList = styled(CardList)``;

export const CourseCard = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: start;
  margin: 0 16px;
  border-left: 4px solid ${props => props.color};
  padding-left: 15px;
  margin-right: 32px;
`;

export const CourseCardHeader = styled(Link)`
  margin: 0;
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

export const CourseCardTitle = styled(Link)`
  margin: 16px 0 0;
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 600;
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

export const CourseCardDescription = styled(Text)`
  margin-top: 8px;
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: 500;
  @media (min-width: 769px) {
    font-size: 15px;
  }
`;

export const CoursesCardListCourseScreen = styled(CoursesCardList)`
  flex-direction: column;
`;

export const CourseCardCourseScreen = styled(CourseCard)`
  margin: 0 0 24px;
  width: auto;
`;
