import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, BackButton } from "../../styles.js";
import {
  Partners,
  PartnersTitle,
  PartnersCardLeft,
  PartnersLogo,
  PartnersCardRight,
  PartnersName,
  PartnersCategory,
  PartnersCardListPartnerScreen,
  PartnerCardPartnerScreen
} from "./styles.js";

import partnersList from "../Partners/partners";

export default function Result() {
  const history = useHistory();
  const [partners, setPartners] = useState();
  const { results } = history.location.state
    ? history.location.state
    : { results: null };

  useEffect(() => {
    setPartners(partnersList);
  }, []);

  return (
    <>
      <Container>
        <Section>
          <Partners>
            <BackButton onClick={() => history.push("/result", { results })} />
            <PartnersTitle>Parceiros</PartnersTitle>
            <PartnersCardListPartnerScreen>
              {partners?.map(partner => {
                return (
                  <PartnerCardPartnerScreen
                    key={partner.id}
                    onClick={() => history.push("/partner-detail", { results })}
                  >
                    <PartnersCardLeft>
                      <PartnersLogo />
                    </PartnersCardLeft>
                    <PartnersCardRight>
                      <PartnersName>{partner.name}</PartnersName>
                      <PartnersCategory>{partner.category}</PartnersCategory>
                    </PartnersCardRight>
                  </PartnerCardPartnerScreen>
                );
              })}
            </PartnersCardListPartnerScreen>
          </Partners>
        </Section>
      </Container>
    </>
  );
}
