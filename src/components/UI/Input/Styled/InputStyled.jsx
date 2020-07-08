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
