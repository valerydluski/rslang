import styled from 'styled-components';
import { DEVICE } from '../../../../config';

export const InputContainer = styled.div`
  margin: 10px 0;

  &.radio-button_container {
    margin: 5px 0;
  }
`;

export const InputStyled = styled.input`
  margin-right: 10px;
  &.settings {
    border: none;
    border-bottom: 1px solid #c4c4c4;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 28px;
    color: #7d7d7d;
    outline: none;

    @media ${DEVICE.mobileL} {
      font-size: 20px;
    }
  }
  &.auth {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    color: #b2b2b2;
    font-size: 23px;
    line-height: 27px;
    outline: none;
    &::placeholder {
      color: #b2b2b2;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    -webkit-autofill:focus,
    -internal-autofill-selected {
      -webkit-text-fill-color: #b2b2b2;
    }
  }
`;

export const LabelStyled = styled.label`
  margin-left: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  @media ${DEVICE.mobileL} {
    font-size: 18px;
  }
`;

export const SpanStyled = styled.span`
  &.span_none {
    display: none;
  }
`;
