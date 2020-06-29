import styled from 'styled-components';

const FormStyled = styled.form`
  grid-area: form;
  align-self: start;
  justify-self: start;
  margin-left: 150px;
  display: grid;
  grid-template-rows: 15% 15% 15% 55%;
  height: 100%;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }

  input {
    height: 40px;
    width: 540px;
    border: 1.39565px solid #c4c4c4;
    outline: none;
    background-color: #ffffff;
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

    &:hover {
      cursor: pointer;
      background: #fec246;
    }
  }
`;

export default FormStyled;
