import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, Logo } from "../../../styles.js";
import { Button } from "./styles.js";

function App() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Section>
          <Logo />
          <Button onClick={() => history.push("register-company")}>
            Já tenho uma empresa aberta
          </Button>
          <Button onClick={() => history.push("register-no-company")}>
            Vou abrir minha empresa
          </Button>
        </Section>
      </Container>
    </>
  );
}

export default App;
