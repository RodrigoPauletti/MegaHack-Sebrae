import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, BackButton, Button } from "../../styles.js";
import {
  PartnerDetailContainer,
  PartnerDetailInfo,
  PartnerDetailLogo,
  PartnerDetailName,
  PartnerDetailType,
  PartnerDetailDescription
} from "./styles.js";

export default function PartnerBudget() {
  const history = useHistory();
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
            <PartnerDetailInfo>
              <PartnerDetailLogo />
              <PartnerDetailName>Conta Azul</PartnerDetailName>
              <PartnerDetailType>Consultoria financeira</PartnerDetailType>
              <PartnerDetailDescription>
                Conta Azul é uma empresa de software brasileira que desenvolve e
                vende uma plataforma de gestão de negócios, inteiramente em
                nuvem, para micro e pequenas empresas, com uma extensão para
                escritórios contábeis. A plataforma Conta Azul (para MPEs) e a
                Conta Azul Mais (para contadores) possibilita integrações dos
                clientes com governo, bancos etc
              </PartnerDetailDescription>
            </PartnerDetailInfo>
            <Button
              onClick={() => history.push("/partner-budget", { results })}
            >
              Solicitar orçamento
            </Button>
          </PartnerDetailContainer>
        </Section>
      </Container>
    </>
  );
}
