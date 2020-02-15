import React from "react";

import FormRange from "../FormRange/index.js";

export default function FormRangesList(props) {
  return (
    <>
      {props.items?.map((label, index) => {
        return <FormRange key={index} label={label} />;
      })}
    </>
  );
}
