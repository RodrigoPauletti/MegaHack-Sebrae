import React from "react";

import { FormInputContainer, Label } from "../Form/styles.js";
import { Input } from "./styles.js";

export default function FormInput(props) {
  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        <Input></Input>
      </FormInputContainer>
    </>
  );
}
