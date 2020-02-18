import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  Container,
  Section,
  BackButton,
  ButtonsContainer,
  Button
} from "../../styles.js";
import {
  PartnerDetailContainer,
  PartnerDetailInfo,
  PartnerDetailLogoRounded,
  PartnerDetailName,
  PartnerDetailType,
  PartnerDetailDescription
} from "./styles.js";
import partnersList from "./partners";

export default function PartnerBudget() {
  const [partner, setPartner] = useState(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getPartner = partnersList.find(
      partner => partner.id === parseInt(id)
    );
    setPartner(getPartner);
  }, [id]);

  const { results } = history.location.state
    ? history.location.state
    : { results: null };

  return (
    <>
      <Container>
        <Section>
          <PartnerDetailContainer>
            <BackButton
              onClick={() => history.push("/partners", { results })}
            />
            {partner ? (
              <>
                <PartnerDetailInfo>
                  <PartnerDetailLogoRounded src={partner.image} />
                  <PartnerDetailName>{partner.name}</PartnerDetailName>
                  <PartnerDetailType>{partner.type}</PartnerDetailType>
                  <PartnerDetailDescription>
                    {partner.description}
                  </PartnerDetailDescription>
                </PartnerDetailInfo>
                <ButtonsContainer>
                  <Button
                    onClick={() =>
                      history.push("/partner-budget", { results, partner })
                    }
                  >
                    Solicitar orçamento
                  </Button>
                </ButtonsContainer>
              </>
            ) : (
              ""
            )}
          </PartnerDetailContainer>
        </Section>
      </Container>
    </>
  );
}
