import React from "react";

import QuestionSection from "../QuestionSection/index.js";
import FormRangesList from "../FormRangesList/index.js";

import { Button } from "../../styles.js";
import { Form } from "../../styles.js";

export default function QuestionsList({ type, items }) {
  return (
    <>
      {items?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <QuestionSection categoryName={item.categoryName} type={type} />
            <Form>
              <FormRangesList items={item.items} />
              <Button>Próximo</Button>
            </Form>
          </React.Fragment>
        );
      })}
    </>
  );
}
