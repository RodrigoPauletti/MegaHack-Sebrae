import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, Logo, Form, Button } from "../../styles.js";

import FormInput from "../../components/FormInput/index.js";
import FormRadio from "../../components/FormRadio/index.js";
import FormSelect from "../../components/FormSelect/index.js";

export default function RegisterNoCompany() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Section>
          <Logo />
          <Form
            onSubmit={() => history.push(`/questions`, { type: "company" })}
          >
            <FormInput
              label="Digite seu nome completo"
              type="text"
              required={true}
            />
            <FormInput
              label="Informe seu CPF"
              mask="cpf"
              type="text"
              required={true}
            />
            <FormInput
              label="Qual o nome da sua empresa?"
              type="text"
              required={true}
            />
            <FormInput
              label="Qual foi o faturamento da sua empresa no ano de 2019?"
              mask="amount"
              required={true}
            />
            <FormRadio
              label="Em qual dessas opções sua empresa se enquadra?"
              required={true}
              options={["Produtos", "Serviços"]}
            />
            <FormSelect
              label="Qual segmento sua empresa atua?"
              required={true}
              segments={[
                "Agricultura",
                "Alimentos e Bebidas",
                "Artesanato",
                "Beleza",
                "Construção",
                "Construção e Reforma",
                "Economia Criativa",
                "Madeira e Móveis",
                "Mercado Digital",
                "Mercearia e Supermercados",
                "Metal Mecânico",
                "Móveis e Decoração",
                "Moda",
                "Saúde e bem-estar",
                "Pecuária",
                "Petroquímico e Mineração",
                "Turismo",
                "Veículos"
              ]}
            />
            <Button>Próximo</Button>
          </Form>
        </Section>
      </Container>
    </>
  );
}
