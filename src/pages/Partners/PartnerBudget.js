import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Section,
  BackButton,
  Form,
  ButtonsContainer,
  Button
} from "../../styles.js";
import {
  PartnerDetailContainer,
  PartnerDetailInfo,
  PartnerDetailLogoRounded,
  PartnerDetailName
} from "./styles.js";

import FormInput from "../../components/FormInput/index.js";
import FormSelect from "../../components/FormSelect/index.js";

export default function RegisterNoCompany() {
  const history = useHistory();
  const { results, partner } = history.location.state
    ? history.location.state
    : { results: null, partner: { id: 0 } };

  return (
    <>
      <Container>
        <Section>
          <PartnerDetailContainer>
            <BackButton
              onClick={() =>
                history.push(`/partner-detail/${partner.id}`, { results })
              }
            />
            <PartnerDetailInfo>
              <PartnerDetailLogoRounded src={partner.image} />
              <PartnerDetailName>{partner.name}</PartnerDetailName>
            </PartnerDetailInfo>

            <Form
              onSubmit={() =>
                history.push(`/partner-detail/${partner.id}`, { results })
              }
            >
              <FormInput label="Digite seu nome completo" required={true} />
              <FormInput
                label="Digite seu e-mail"
                type="email"
                required={true}
              />
              <FormInput label="Digite seu telefone" required={true} />
              <FormSelect
                label="Do que você precisa?"
                required={true}
                segments={["Assessoria", "Consultoria", "Gestão"]}
              />
              <ButtonsContainer>
                <Button>Solicitar orçamento</Button>
              </ButtonsContainer>
            </Form>
          </PartnerDetailContainer>
        </Section>
      </Container>
    </>
  );
}
