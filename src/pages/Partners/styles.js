import styled from "styled-components";

import fonts from "../../fonts.js";
import { colors } from "../../variables.js";

import { Text } from "../../styles.js";

import contaAzul from "../../assets/conta-azul.png";

export const PartnerDetailContainer = styled.div`
  width: 100%;
`;

export const PartnerDetailInfo = styled.div`
  text-align: center;
`;

export const PartnerDetailLogo = styled.img.attrs({
  src: contaAzul
})`
  background: ${colors.white};
  width: 61px;
  height: 61px;
  border-radius: 100%;
  padding: 13px;
  display: block;
  margin: 0 auto;
`;

export const PartnerDetailName = styled(Text)`
  color: ${colors.gray};
  font-size: 24px;
  font-weight: 600;
  margin: 24px 0 0;
`;

export const PartnerDetailType = styled(Text)`
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0 0;
`;

export const PartnerDetailDescription = styled(Text)`
  color: ${colors.gray};
  font-size: 14px;
  font-weight: 500;
  margin: 32px 0 0;
`;
