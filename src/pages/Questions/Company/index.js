import React from "react";

import QuestionsList from "../../../components/QuestionsList/index.js";

export default function QuestionsCompany({ type }) {
  return (
    <QuestionsList
      type={type}
      items={[
        {
          categoryName: "Financeiro",
          items: [
            "Eu acompanho meu capital de giro, ou seja, faço o controle de recursos para suprir minha necessidades financeiras para os próximos meses.",
            "Eu acompanho meu fluxo de caixa, ou seja, controlo minha receitas e despesas de cada mês.",
            "Meus prazos de pagamento e recebimento são bem definidos de acordo com as minhas necessidades financeiras."
          ],
          grades: [
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5)
          ]
        },
        {
          categoryName: "Marketing/Vendas",
          items: [
            "Eu tenho uma estratégia de vendas definida e atualizada.",
            "Eu divulgo a minha marca e meu produto/ serviço e avalio se estes investimentos trazem retorno para meu negócio."
          ],
          grades: [Math.round(Math.random() * 5), Math.round(Math.random() * 5)]
        },
        {
          categoryName: "Operacional",
          items: [
            "Eu controlo os processos e fluxos operacionais da empresa, levando em conta, fluxos de pagamento, recebimento, fornecedores, contratos, atendimento, etc.",
            "Eu revisito meu plano de negócios para mante-lo atualizado de acordo com o panorama atual do meu negócio e do mercado.",
            "Eu faço a gestão dos meus funcionários levando em conta fatores como: contratação, capacitação e com relação a aspectos trabalhistas."
          ],
          grades: [
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5)
          ]
        },
        {
          categoryName: "Produtos/Serviços",
          items: [
            "Eu busco aperfeiçoar meu produto/serviço de acordo com as necessidades do mercado e do usuário.",
            "Eu busco me atualizar em relação as novas tecnologias disponíveis no mercado.",
            "Eu busco manter um diferencial competitivo para meu produto/serviço em relação ao mercado.",
            "Eu busco entender se o preço do meu produto/serviço está de acordo com fatores como: oferta e demanda, percepção de valor e necessidade financeira do meu negócio."
          ],
          grades: [
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5),
            Math.round(Math.random() * 5)
          ]
        }
      ]}
    />
  );
}
