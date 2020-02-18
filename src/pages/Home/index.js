import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Section, Logo, Button } from "../../styles.js";
import { OpeningText } from "./styles.js";

function App() {
  const history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  return (
    <>
      <Container>
        <Section>
          <Logo />
          <OpeningText>
            Pensando nos desafios do empreendedor brasileiro para ter sucesso na
            jornada de negócios, o Sebrae traz uma novidade para auxiliar você
            que já tem um negócio próprio ou que quer abrir.
            <br />O Raio-x Sebrae é uma solução simples para você avaliar seus
            conhecimentos e práticas na sua empresa.
            <br />
            Além disso, baseado em seu diagnóstico o Sebrae indica ponto a ponto
            como você pode melhorar a saúde do seu negócio, com conteúdo,
            cursos, materiais práticos de apoio, atendimento Sebrae e um
            ambiente de Marketplace para você encontrar melhores prestadores de
            serviços e fornecedores para seus negócios.
            <br />
            Confira abaixo como fazer o seu diagnóstico.
          </OpeningText>
          <OpeningText>
            Cadastre-se ou faça Login com sua conta Sebrae.
            <br />
            Escolha a opção que se enquadra com sua situação: “Quero abrir uma
            empresa” ou “Já possuo uma empresa”.
            <br />
            Preencha o formulário que avalia seus conhecimentos e práticas.
            <br />
            Conheça o resultado e quais soluções o Sebrae trouxe para você.
          </OpeningText>
          <OpeningText>
            Soluções do Raio-x Sebrae para sua empresa: Conteúdos Sebrae –
            Cursos, eventos, artigos e passo a passos. Na prática – Materiais de
            apoio para você colocar em prática as atividades essenciais da sua
            empresa com planilhas, guias, apresentações e documentos. Parceiros
            Sebrae – Um ambiente de Marketplace com diversas opções de
            fornecedores, prestadores de serviço e consultorias para o seu
            negócio. Atendimento Sebrae – Tire suas dúvidas em tempo real e
            receba dicas sobre seu negócio diretamente do nossos especialistas
            em pequenas e micro empresas.
          </OpeningText>
          <Button onClick={() => handleClick()}>Vamos lá</Button>
        </Section>
      </Container>
    </>
  );
}

export default App;
