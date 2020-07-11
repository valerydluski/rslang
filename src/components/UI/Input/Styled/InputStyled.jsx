import styled from 'styled-components';

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
    color: #929292;
    outline: none;
  }
  &.auth {
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    color: #c4c4c4;
    font-size: 23px;
    line-height: 27px;
    outline: none;
    &::placeholder {
      color: #c4c4c4;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    -webkit-autofill:focus,
    -internal-autofill-selected {
      -webkit-text-fill-color: #c4c4c4;
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
`;

export const SpanStyled = styled.span`
  &.span_none {
    display: none;
  }
`;
