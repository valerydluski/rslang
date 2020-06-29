import styled from 'styled-components';

const FormStyled = styled.form`
  grid-area: form;
  align-self: start;
  justify-self: start;
  margin-left: 150px;
  display: grid;
  grid-template-rows: 20% 20% 10% 50%;
  height: 100%;

  input {
    height: 40px;
    width: 540px;
    border: 1.39565px solid #c4c4c4;
    outline: none;
  }

  .button_sign-in {
    border-radius: 50%;
    width: 178px;
    height: 178px;
    border: none;
    outline: none;
    align-self: start;
    justify-self: end;
    background: #404497;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
  }
`;

export default FormStyled;
