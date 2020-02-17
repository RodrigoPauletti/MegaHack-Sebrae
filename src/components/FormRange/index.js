import React, { useState, useCallback, memo } from "react";

import {
  FormInputContainer,
  Label,
  InputRange,
  LabelRangeValuesList,
  LabelRangeValue
} from "./styles.js";

/* <h1>TODO: Adicionar 'TIP' em cada pergunta para dar um resumo do que significa (Ex.: Fluxo de caixa)</h1> */
/* <h1>TODO: No responsivo, remover 'TIP' e deixar o resumo já visível</h1> */

function FormRange(props) {
  const [rangeValue, setRangeValue] = useState(0);

  const handleChange = useCallback(
    value => {
      setRangeValue(value);
      props.onChange(value);
    },
    [props]
  );

  // TODO: Verificar pq é loggado TODOS os inputs quando um só é alterado
  // console.log("FormRange PROPS", props);

  const options = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <InputRange
          name={`ranges.${props.categoryIndex}.grades.${props.index}`}
          values={options}
          value={rangeValue}
          onChange={event => handleChange(parseInt(event.target.value))}
        />
        <LabelRangeValuesList>
          {options.map(option => {
            return (
              <LabelRangeValue
                key={option}
                onClick={() => handleChange(option)}
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

export default memo(FormRange);
