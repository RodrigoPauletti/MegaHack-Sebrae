import React from "react";

import { FormInputContainer, Label } from "../Form/styles.js";
import { Select, Option } from "./styles.js";

export default function FormSelect(props) {
  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <Select defaultValue="" required={props.required}>
          <Option disabled value="">
            Selecione a categoria
          </Option>
          {props.segments?.map((segment, index) => {
            return <Option key={index}>{segment}</Option>;
          })}
        </Select>
      </FormInputContainer>
    </>
  );
}
