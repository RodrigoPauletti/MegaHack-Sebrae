import React from "react";

import QuestionsCompany from "./Company/index.js";
import QuestionsNoCompany from "./NoCompany/index.js";

import { Container } from "../../styles.js";
import { Section } from "./styles.js";

export default function Questions() {
  const type = "company";

  return (
    <>
      <Container>
        <Section>
          {type === "company" ? (
            <QuestionsCompany type={type} />
          ) : (
            <QuestionsNoCompany type={type} />
          )}
        </Section>
      </Container>
    </>
  );
}
