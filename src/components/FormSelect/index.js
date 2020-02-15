import React from "react";

import { FormInputContainer, Label } from "../Form/styles.js";
import { Select, Option } from "./styles.js";

export default function FormSelect(props) {
  function handleChange(event) {
    // console.log(event.target.value);
  }

  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <Select defaultValue="" onChange={event => handleChange(event)}>
          <Option disabled value="">
            Selecione a categoria
          </Option>
          {props.segments?.map(segment => {
            return <Option key={segment}>{segment}</Option>;
          })}
        </Select>
      </FormInputContainer>
    </>
  );
}
