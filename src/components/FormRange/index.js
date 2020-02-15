import React, { useState } from "react";

import {
  FormInputContainer,
  Label,
  InputRange,
  LabelRangeValuesList,
  LabelRangeValue
} from "./styles.js";

/* <h1>TODO: Adicionar 'TIP' em cada pergunta para dar um resumo do que significa (Ex.: Fluxo de caixa)</h1> */
/* <h1>TODO: No responsivo, remover 'TIP' e deixar o resumo já visível</h1> */

export default function FormRange(props) {
  const [rangeValue, setRangeValue] = useState(0);

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <InputRange
          values={options}
          value={rangeValue}
          onChange={event => setRangeValue(event.target.value)}
        />
        <LabelRangeValuesList>
          {options.map(option => {
            return (
              <LabelRangeValue
                key={option}
                onClick={() => setRangeValue(option)}
              >
                {option}
              </LabelRangeValue>
            );
          })}
        </LabelRangeValuesList>
      </FormInputContainer>
    </>
  );
}
