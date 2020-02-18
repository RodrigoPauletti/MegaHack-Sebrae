import styled from "styled-components";

import { colors } from "../../variables.js";

import { TextInternal } from "../../styles.js";

import {
  Header,
  HeaderTitle,
  WhiteCard,
  CardsContainer
} from "../../styles.js";

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
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const PartnersCardLeft = styled.div``;

export const PartnersLogo = styled.img.attrs(({ src }) => {
  return {
    src: `/images/${src}`
  };
})`
  width: 38px;
  max-height: 38px;
  &:hover {
    cursor: pointer;
  }
`;

export const PartnersCardRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

export const PartnersName = styled(TextInternal)`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.gray};
`;

export const PartnersCategory = styled(TextInternal)`
  color: ${colors.secondary};
`;

export const PartnersCardListPartnerScreen = styled(PartnersCardList)`
  flex-direction: column;
  margin-top: 25px;
  @media (min-width: 769px) {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PartnerCardPartnerScreen = styled(PartnersCard)`
  margin: 0 0 16px;
  width: 264px;
  @media (min-width: 769px) {
    display: inline-flex;
    margin: 0 5px 16px 0;
  }
`;

export const PartnerDetailContainer = styled.div`
  width: 100%;
`;

export const PartnerDetailInfo = styled.div`
  text-align: center;
`;

export const PartnerDetailLogo = styled(PartnersLogo)`
  background: ${colors.white};
  width: 61px;
  height: 61px;
  border-radius: 100%;
  padding: 13px;
  display: block;
  margin: 0 auto;
`;

export const PartnerDetailLogoRounded = styled(PartnerDetailLogo)`
  max-width: none;
  max-height: none;
  object-fit: contain;
`;

export const PartnerDetailName = styled(TextInternal)`
  color: ${colors.gray};
  font-size: 24px;
  font-weight: 600;
  margin: 24px 0 0;
`;

export const PartnerDetailType = styled(TextInternal)`
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0 0;
`;

export const PartnerDetailDescription = styled(TextInternal)`
  color: ${colors.gray};
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  margin: 32px 0 16px;
  white-space: pre-line;
`;
