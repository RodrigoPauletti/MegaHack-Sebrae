import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

import contaAzul from "../../assets/conta-azul.png";
import "./slick-styles.css";

export const ResultGrades = styled.div``;

export const Text = styled.p`
  margin: 0;
  font-family: ${fonts.raleway};
  font-size: 16px;
  font-weight: 500;
`;

export const CardsContainer = styled.div`
  margin-top: 62px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled(Text)`
  color: ${colors.gray};
  font-size: 21px;
  font-weight: 600;
`;

export const SeeAll = styled(Text)`
  color: ${colors.seeAll};
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

export const WhiteCard = styled.div`
  border-radius: 20px;
  background: ${colors.white};
  padding: 24px;
  box-shadow: 0 3px 6px #0000001c;
`;

export const CardList = styled.div`
  display: flex;
  align-items: start;
  margin-top: 25px;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
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
  width: 240px;
  border-left: 4px solid ${props => props.color};
  padding-left: 15px;
  margin-right: 32px;
`;

export const CourseCardHeader = styled.a`
  margin: 0;
  color: ${colors.gray};
  font-family: ${fonts.raleway};
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
`;

export const CourseCardTitle = styled(Text)`
  margin-top: 16px;
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 600;
`;

export const CourseCardDescription = styled(Text)`
  margin-top: 8px;
  color: ${colors.secondary};
  font-size: 12px;
  font-weight: 500;
`;

export const CoursesCardListCourseScreen = styled(CoursesCardList)`
  flex-direction: column;
`;

export const CourseCardCourseScreen = styled(CourseCard)`
  margin: 0 0 24px;
  width: auto;
`;

export const Chat = styled(WhiteCard)`
  margin-top: 62px;
`;

export const ChatTitle = styled(Text)`
  color: ${colors.gray};
  font-size: 21px;
  font-weight: 600;
`;

export const ChatText = styled(Text)`
  margin: 7px 0 19px;
  color: ${colors.secondary};
  font-size: 14px;
`;

export const Partners = styled(CardsContainer)``;

export const PartnersHeader = styled(Header)`
  margin-bottom: 25px;
`;

export const PartnersTitle = styled(HeaderTitle)``;

export const PartnersCardList = styled.div``;

export const PartnersCard = styled(WhiteCard)`
  display: flex;
  align-items: center;
  padding: 28px;
  &:hover {
    cursor: pointer;
  }
`;

export const PartnersCardLeft = styled.div``;

export const PartnersLogo = styled.img.attrs({
  src: contaAzul
})`
  width: 38px;
  height: 38px;
  margin-right: 32px;
  &:hover {
    cursor: pointer;
  }
`;

export const PartnersCardRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PartnersName = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.gray};
`;

export const PartnersCategory = styled(Text)`
  color: ${colors.secondary};
`;

export const PartnersCardListPartnerScreen = styled(PartnersCardList)`
  flex-direction: column;
  margin-top: 25px;
`;

export const PartnerCardPartnerScreen = styled(PartnersCard)`
  margin: 0 0 16px;
  width: 264px;
`;
