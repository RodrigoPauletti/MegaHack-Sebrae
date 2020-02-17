import React from "react";

import QuestionSection from "../QuestionSection/index.js";
import FormRangesList from "../FormRangesList/index.js";

import { Button } from "../../styles.js";
import { Form } from "./styles.js";
import { Formik } from "formik";

function strToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

let actualIndex = 0; /* TODO: Utilizar useState */

function handlePrevious() {
  if (actualIndex > 0) {
    actualIndex--;
  }
}

function handleNext(itemsLength, ranges) {
  if (actualIndex < itemsLength - 1) {
    actualIndex++;
  } else {
    const results = ranges.map(range => {
      const questionsLength = range.items.length;
      const grades = range.grades.reduce((a, b) => a + b, 0);
      return {
        categoryName: range.categoryName,
        average: grades / questionsLength
      };
    });
  }
}

const QuestionsList = ({ type, items }) => (
  <div>
    <Formik
      initialValues={{ ranges: items }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <>
          {items?.map((item, index) => {
            return index >= 0 /* === actualIndex */ ? (
              <React.Fragment key={index}>
                <QuestionSection categoryName={item.categoryName} type={type} />
                <Form onSubmit={props.handleSubmit}>
                  <FormRangesList
                    categoryName={strToSlug(item.categoryName)}
                    items={item.items}
                    onChange={props.setFieldValue}
                    value={props.topics}
                    categoryIndex={index}
                  />
                  {index > 0 ? (
                    <Button onClick={handlePrevious}>Anterior</Button>
                  ) : (
                    ""
                  )}
                  {index < items.length - 1 ? (
                    <Button onClick={() => handleNext(items.length)}>
                      Próximo
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handleNext(items.length, props.values?.ranges)
                      }
                    >
                      Finalizar
                    </Button>
                  )}
                </Form>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}></React.Fragment>
            );
          })}
        </>
      )}
    </Formik>
  </div>
);

export default QuestionsList;
