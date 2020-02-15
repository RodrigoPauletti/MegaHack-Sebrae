import styled from "styled-components";

// import fonts from '../../fonts.js';
import { colors } from "../../variables.js";
import { Label as LabelInitial } from "../Form/styles.js";

export const FormInputRadioList = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const FormInputRadio = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
`;

export const Radio = styled.input.attrs({
  type: "radio"
})`
  width: 18px;
  height: 18px;
  appearance: none;
  outline: none;
  &:checked {
    ~ span {
      &:after {
        display: block;
      }
    }
  }
`;

export const CustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: ${colors.white};
  width: 18px;
  height: 18px;
  margin: 0;
  border: 1px solid ${colors.sliderBackground};
  border-radius: 100%;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    border-color: ${colors.primary};
    transition: all 0.3s ease;
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.primary};
    transform: translate(-50%, -50%);
  }
`;

export const LabelRadio = styled(LabelInitial)`
  &:hover {
    cursor: pointer;
  }
`;
