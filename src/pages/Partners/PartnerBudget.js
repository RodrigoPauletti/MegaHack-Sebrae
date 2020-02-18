import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, BackButton, Form, Button } from "../../styles.js";
import { PartnerDetailContainer, PartnerDetailLogo } from "./styles.js";

import FormInput from "../../components/FormInput/index.js";
import FormSelect from "../../components/FormSelect/index.js";

export default function RegisterNoCompany() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Section>
          <PartnerDetailContainer>
            <BackButton onClick={() => history.push("/partner-detail")} />
            <PartnerDetailLogo />
            <Form onSubmit={() => history.push("/partners")}>
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
              <Button>Solicitar orçamento</Button>
            </Form>
          </PartnerDetailContainer>
        </Section>
      </Container>
    </>
  );
}
