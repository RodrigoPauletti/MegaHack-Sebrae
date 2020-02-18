import React from "react";

import QuestionsList from "../../../components/QuestionsList/index.js";

export default function QuestionsNoCompany({ type }) {
  return (
    <>
      <QuestionsList
        type={type}
        items={[
          {
            categoryName: "Financeiro",
            items: [
              "Eu planejo meu capital de giro, ou seja, tenho uma reserva de recursos para suprir minha necessidades financeiras ao longo do tempo.",
              "Eu fiz uma projeção do meu fluxo de caixa, ou seja, projetei minha receitas e despesas ao longo do tempo.",
              "Eu calculei o investimento inicial necessário para abrir minha empresa e sobreviver até gerar receitas relevantes."
            ],
            grades: [0, 0, 0]
          },
          {
            categoryName: "Marketing/Vendas",
            items: [
              "Eu planejei uma estratégia de vendas, considerando quais canais de venda irei trabalhar e os fluxos de venda necessários.",
              "Eu elaborei uma estratégia de divulgação do meu negócio e produto/serviço.",
              "Eu defini um publico alvo para direcionar meus esforços de vendas e comunicação."
            ],
            grades: [0, 0, 0]
          },
          {
            categoryName: "Mercado",
            items: [
              "Eu estudei sobre o mercado que irei atuar, levando em consideração dados econômicos, demográficos, jurídicos e tendencias.",
              "Eu fiz uma analise dos meus potenciais concorrentes."
            ],
            grades: [0, 0]
          },
          {
            categoryName: "Operacional",
            items: [
              "Eu defini os processos e fluxos operacionais da empresa, levando em conta, fluxos de pagamento, recebimento, fornecedores, contratos, atendimento, etc.",
              "Eu consultei os aspectos legais e tributários que impactam no meu negócio",
              "Eu pesquisei aspectos sobre contratação e gestão de pessoas (caso não pretende contratar, pular para a próxima)"
            ],
            grades: [0, 0, 0]
          },
          {
            categoryName: "Produtos/Serviços",
            items: [
              "Ao definir meu produto/serviço eu levei em consideração os seguintes aspectos: Aceitação do público, qualidade e preço.",
              "Baseado em meus recursos eu estimei quanto consigo produzir/prestar meu serviço em um certo período.",
              "Eu considero que o produto/serviço que pretendo ofertar tem um diferencial competitivo no mercado."
            ],
            grades: [0, 0, 0]
          }
        ]}
      />
    </>
  );
}
