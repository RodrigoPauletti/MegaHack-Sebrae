import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, Logo, Button } from "../../styles.js";
import { OpeningText } from "./styles.js";

function App() {
  const history = useHistory();

  return (
    <>
      <Container>
        <Section>
          <Logo />
          <OpeningText>
            Pensando nos desafios do empreendedor brasileiro para ter sucesso na
            jornada de negócios, o Sebrae traz uma novidade para auxiliar você
            que já tem um negócio próprio ou que quer abrir.
            <br />O <strong>Raio-x Sebrae</strong> é uma solução simples para
            você avaliar seus conhecimentos e práticas na sua empresa.
            <br />
            Além disso, baseado em seu diagnóstico, o Sebrae indica ponto a
            ponto como você pode melhorar a saúde do seu negócio, com conteúdo,
            cursos, materiais práticos de apoio e um ambiente de Marketplace
            para você encontrar melhores prestadores de serviços e fornecedores
            para seus negócios.
            <br />
            Confira abaixo como fazer o seu diagnóstico:
          </OpeningText>
          <OpeningText>
            1. Cadastre-se ou faça Login com sua conta Sebrae.
            <br />
            2. Escolha a opção que se enquadra com sua situação:
            <strong> "Quero abrir uma empresa"</strong> ou
            <strong> "Já possuo uma empresa"</strong>.
            <br />
            3. Preencha o formulário que avalia seus conhecimentos e práticas.
            <br />
            4. Conheça o resultado e quais soluções o Sebrae trouxe para você.
          </OpeningText>
          <OpeningText>
            Soluções do Raio-x Sebrae para sua empresa:
            <br />
            <strong>Conteúdos Sebrae</strong> – Cursos, eventos, artigos e passo
            a passos.
            <br />
            <strong>Na prática</strong> – Materiais de apoio para você colocar
            em prática as atividades essenciais da sua empresa com planilhas,
            guias, apresentações e documentos.
            <br />
            <strong>Parceiros</strong> – Um ambiente de Marketplace com diversas
            opções de fornecedores, prestadores de serviço e consultorias para o
            seu negócio.
          </OpeningText>
          <Button onClick={() => history.push("/register")}>Vamos lá</Button>
        </Section>
      </Container>
    </>
  );
}

export default App;
