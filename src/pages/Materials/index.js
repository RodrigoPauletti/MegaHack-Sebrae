import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, BackButton } from "../../styles.js";
import {
  Materials,
  MaterialsTitle,
  MaterialsCardLeft,
  MaterialsLogo,
  MaterialsCardRight,
  MaterialsName,
  MaterialsDownload,
  MaterialsCardListMaterialScreen,
  MaterialCardMaterialScreen
} from "./styles.js";

import materialsList from "../Materials/materials";

export default function Result() {
  const history = useHistory();
  const [materials, setMaterials] = useState();
  const { results } = history.location.state
    ? history.location.state
    : { results: null };

  useEffect(() => {
    setMaterials(materialsList);
  }, []);

  function handleClick() {}

  return (
    <>
      <Container>
        <Section>
          <Materials>
            <BackButton onClick={() => history.push("/result", { results })} />
            <MaterialsTitle>Na prática</MaterialsTitle>
            <MaterialsCardListMaterialScreen>
              {materials?.map(material => {
                return (
                  <MaterialCardMaterialScreen onClick={() => handleClick()}>
                    <MaterialsCardLeft>
                      <MaterialsLogo />
                    </MaterialsCardLeft>
                    <MaterialsCardRight>
                      <MaterialsName>{material.name}</MaterialsName>
                      <MaterialsDownload href={material.url} target="_blank">
                        Baixar arquivo
                      </MaterialsDownload>
                    </MaterialsCardRight>
                  </MaterialCardMaterialScreen>
                );
              })}
            </MaterialsCardListMaterialScreen>
          </Materials>
        </Section>
      </Container>
    </>
  );
}
