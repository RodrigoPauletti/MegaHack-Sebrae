import React, { useState } from "react";
import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-input";

import { FormInputContainer, Label } from "../Form/styles.js";
import { Input, InputStyle } from "./styles.js";

export default function FormInput(props) {
  const [amount, setAmount] = useState("0.00");

  function handleChange(event, maskedvalue, floatvalue) {
    setAmount(maskedvalue);
  }

  return (
    <>
      <FormInputContainer>
        <Label>{props.label}</Label>
        {props.mask && props.mask === "cpf" ? (
          <InputMask
            mask="999.999.999-99"
            onChange={props.onChange}
            value={props.value}
            style={InputStyle}
          />
        ) : props.mask === "amount" ? (
          <CurrencyInput
            value={amount}
            prefix="R$ "
            decimalSeparator=","
            thousandSeparator="."
            onChangeEvent={() => handleChange()}
            style={InputStyle}
          />
        ) : (
          <Input type={props.type} required={props.required} />
        )}
      </FormInputContainer>
    </>
  );
}
