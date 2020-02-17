import React, { useCallback, memo } from "react";
import { FieldArray } from "formik";

import FormRange from "../FormRange/index.js";

function FormRangesList(props) {
  const handleChange = useCallback(
    (value, index) => {
      props.onChange(`ranges.${props.categoryIndex}.grades.${index}`, value);
    },
    [props]
  );

  return (
    <>
      <FieldArray
        name="ranges"
        render={arrayHelpers => (
          <div>
            {props.items?.map((label, index) => {
              return (
                <FormRange
                  key={index}
                  index={index}
                  label={label}
                  categoryName={props.categoryName}
                  categoryIndex={props.categoryIndex}
                  onChange={value => handleChange(value, index)}
                />
              );
            })}
          </div>
        )}
      />
    </>
  );
}

export default memo(FormRangesList);
