import React from "react";

import { Container, Section, Logo, Form, Button } from "../../styles.js";

import FormInput from "../../components/FormInput/index.js";
import FormRadio from "../../components/FormRadio/index.js";
import FormSelect from "../../components/FormSelect/index.js";

export default function RegisterNoCompany() {
  return (
    <>
      <Container>
        <Section>
          <Logo />
          <Form>
            <FormInput label="Digite seu nome completo" />
            <FormInput label="Informe seu CPF" mask="cpf" />
            <FormInput label="Qual o nome da sua empresa?" />
            <FormRadio
              label="Em qual dessas opções sua empresa se enquadra?"
              options={["Produtos", "Serviços"]}
            />
            <FormSelect
              label="Qual segmento sua empresa atua?"
              segments={["cat", "tac", "cta", "atc", "act"]}
            />
            <Button>Próximo</Button>
          </Form>
        </Section>
      </Container>
    </>
  );
}
