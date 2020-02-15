import React from "react";

import { Container, Section, Logo } from "../../../styles.js";
import { Button } from "./styles.js";

function App() {
  return (
    <>
      <Container>
        <Section>
          <Logo />
          <Button>Já tenho uma empresa aberta</Button>
          <Button>Vou abrir minha empresa</Button>
        </Section>
      </Container>
    </>
  );
}

export default App;
