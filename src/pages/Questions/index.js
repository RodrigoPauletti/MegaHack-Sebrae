import React from "react";
import { useHistory } from "react-router-dom";

import QuestionsCompany from "./Company/index.js";
import QuestionsNoCompany from "./NoCompany/index.js";

import { Container } from "../../styles.js";
import { Section } from "./styles.js";

export default function Questions() {
  const history = useHistory();

  const { type } = history.location.state
    ? history.location.state
    : { type: "company" };

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
