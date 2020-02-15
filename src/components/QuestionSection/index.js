import React from "react";

import {
  QuestionCategory,
  ExplanationGrade,
  ExplanationGradeSpan,
  CategoryTitle
} from "./styles.js";

export default function QuestionSection(props) {
  return (
    <>
      <QuestionCategory>{props.categoryName}</QuestionCategory>
      <ExplanationGrade>
        Em uma escala de 0 a 5, onde você e sua empresa melhor se encaixa ?
        <ExplanationGradeSpan>
          (0 não se encaixa e 5 se encaixa perfeitamente)
        </ExplanationGradeSpan>
      </ExplanationGrade>
      <CategoryTitle>
        {props.type === "company"
          ? "No dia a dia da empresa:"
          : "No meu planejamento da abertura da minha empresa:"}
      </CategoryTitle>
    </>
  );
}
