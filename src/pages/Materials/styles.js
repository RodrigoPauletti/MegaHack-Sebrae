import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

import { TextInternal } from "../../styles.js";
import logoMaterials from "../../assets/logo-materials.svg";

import { Header, HeaderTitle, CardsContainer } from "../../styles.js";

export const Materials = styled(CardsContainer)``;

export const MaterialsHeader = styled(Header)`
  margin-bottom: 25px;
`;

export const MaterialsTitle = styled(HeaderTitle)``;

export const MaterialsCardList = styled.div``;

export const MaterialsCard = styled.div`
  display: flex;
  align-items: center;
  padding: 28px;
  margin: 0 10px;
`;

export const MaterialsCardLeft = styled.div``;

export const MaterialsLogo = styled.img.attrs({
  src: logoMaterials
})`
  width: 24px;
  height: 24px;
`;

export const MaterialsCardRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

export const MaterialsName = styled(TextInternal)`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.gray};
`;

export const MaterialsDownload = styled.a`
  font-family: ${fonts.raleway};
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primary};
  margin-top: 5px;
  text-decoration: none;
  &:hover {
    // cursor: pointer;
    text-decoration: underline;
  }
`;

export const MaterialsCardListMaterialScreen = styled(MaterialsCardList)`
  flex-direction: column;
  margin-top: 25px;
  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MaterialCardMaterialScreen = styled(MaterialsCard)`
  margin: 0 0 16px;
  width: 264px;
  @media (min-width: 769px) {
    display: inline-flex;
    margin: 0 5px 16px 0;
  }
  @media (max-width: 768px) {
    border-top: 1px solid ${colors.line};
    &:first-of-type {
      border: 0;
    }
  }
`;
