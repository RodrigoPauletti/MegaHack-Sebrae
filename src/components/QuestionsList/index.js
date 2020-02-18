import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import QuestionSection from "../QuestionSection/index.js";
import FormRangesList from "../FormRangesList/index.js";

import { ButtonsContainer } from "../../styles.js";
import { QuestionContainer, Form, Button } from "./styles.js";
import { Formik } from "formik";

const QuestionsList = ({ type, items }) => {
  const history = useHistory();

  const [actualIndex, setActualIndex] = useState(0);

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

  // let actualIndex = 0; /* TODO: Utilizar useState */

  function handlePrevious() {
    if (actualIndex > 0) {
      setActualIndex(actualIndex - 1);
    }
  }

  async function handleNext(itemsLength, ranges) {
    if (actualIndex < itemsLength - 1) {
      setActualIndex(actualIndex + 1);
    } else {
      const results = await ranges.map(range => {
        const questionsLength = range.items.length;
        const grades = range.grades.reduce((a, b) => a + b, 0);
        return {
          categoryName: range.categoryName,
          average: grades / questionsLength
        };
      });
      history.push({
        pathname: "/result",
        state: { results }
      });
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <Formik
        initialValues={{ ranges: items }}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
      >
        {props => (
          <>
            {items?.map((item, index) => {
              return index === actualIndex ? (
                <QuestionContainer key={index}>
                  <QuestionSection
                    categoryName={item.categoryName}
                    type={type}
                  />
                  <Form onSubmit={props.handleSubmit}>
                    <FormRangesList
                      categoryName={strToSlug(item.categoryName)}
                      items={item.items}
                      onChange={props.setFieldValue}
                      value={props.topics}
                      categoryIndex={index}
                    />
                    <ButtonsContainer>
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
                    </ButtonsContainer>
                  </Form>
                </QuestionContainer>
              ) : (
                <React.Fragment key={index}></React.Fragment>
              );
            })}
          </>
        )}
      </Formik>
    </div>
  );
};

export default QuestionsList;
