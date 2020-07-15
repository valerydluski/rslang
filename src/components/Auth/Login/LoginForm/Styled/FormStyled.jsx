import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const FormStyled = styled.form`
  grid-area: form;
  align-self: start;
  justify-self: start;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  height: 100%;
  width: calc(100% - 150px);
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
  }
  & > div {
    width: 70%;
  }

  @media ${DEVICE.laptop} {
    margin-left: 60px;
    width: calc(100% - 120px);
    & > div {
      width: 100%;
    }
  }

  @media ${DEVICE.mobileL} {
    margin-left: 0;
    width: 100%;
  }

  input {
    height: 40px;
    width: 100%;
    border: 1.39565px solid #c4c4c4;
    outline: none;
    background-color: #ffffff;
    box-sizing: border-box;
    margin-bottom: 15px;
  }

  .button_sign-in {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    border: none;
    outline: none;
    justify-self: flex-end;
    background: #404497;
    color: #ffffff;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    transform: translateX(-50%);
    margin-left: 70%;
    margin-top: 10px;

    @media ${DEVICE.laptop} {
      transform: translateX(-50%);
      align-self: flex-end;
      margin-left: 0;
    }

    @media ${DEVICE.tablet} {
      margin-bottom: 40px;
      width: 86px;
      height: 86px;
      font-size: 16px;
    }

    &:hover {
      cursor: pointer;
      background: #fec246;
    }
  }
`;

export default FormStyled;
