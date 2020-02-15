import React, { useState } from "react";

import { FormInputContainer, Label } from "../Form/styles.js";
import {
  FormInputRadioList,
  FormInputRadio,
  Radio,
  CustomRadio,
  LabelRadio
} from "./styles.js";

export default function FormRadio(props) {
  const [radio, setRadio] = useState(null);

  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <FormInputRadioList>
          {props.options?.map((option, index) => {
            return (
              <FormInputRadio key={option}>
                <Radio
                  id={option}
                  name="tipo-empresa"
                  value={option}
                  checked={radio === option}
                  onChange={() => setRadio(option)}
                />
                <CustomRadio onClick={() => setRadio(option)} />
                <LabelRadio htmlFor={option}>{option}</LabelRadio>
              </FormInputRadio>
            );
          })}
        </FormInputRadioList>
      </FormInputContainer>
    </>
  );
}
