import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, Logo } from "../../../styles.js";
import {
  RegisterOptionsContainer,
  ButtonsContainer,
  Button
} from "./styles.js";

function App() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Section>
          <RegisterOptionsContainer>
            <Logo />
            <ButtonsContainer>
              <Button onClick={() => history.push("register-company")}>
                Já tenho uma empresa aberta
              </Button>
              <Button onClick={() => history.push("register-no-company")}>
                Vou abrir minha empresa
              </Button>
            </ButtonsContainer>
          </RegisterOptionsContainer>
        </Section>
      </Container>
    </>
  );
}

export default App;
