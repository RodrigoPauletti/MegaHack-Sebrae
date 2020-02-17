import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

import {
  Label as LabelInitial,
  FormInputContainer as FormInputContainerInitial
} from "../Form/styles.js";

export const FormInputContainer = styled(FormInputContainerInitial)`
  margin: 32px 0 0;
  padding: 0 0 32px;
  &:first-child {
    margin: 0;
    border-bottom: 1px solid ${colors.line};
  }
`;

export const Label = styled(LabelInitial)`
  font-size: 16px;
`;

export const InputRange = styled.input.attrs(props => ({
  type: "range",
  min: props.values[0],
  max: props.values[props.values.length - 1]
}))`
  margin: 30px 0 0;
  height: 4px;
  background: ${colors.sliderBackground};
  border-radius: 10px;
  outline: none;
  appearance: none;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    background: ${colors.sliderButton};
    border-radius: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  // &::-ms-track {
  //   width: 100%;
  //   cursor: pointer;

  //   /* Hides the slider so custom styles can be added */
  //   background: blue;
  //   border-color: pink;
  //   color: brown;
  // }
`;

export const LabelRangeValuesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.5px;
  margin: 8px 0 0;
`;

export const LabelRangeValue = styled.p`
  color: ${colors.secondary};
  font-family: ${fonts.raleway};
  font-size: 21px;
  font-weight: 500;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;
