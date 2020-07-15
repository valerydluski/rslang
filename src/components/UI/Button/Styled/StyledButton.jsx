import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const ButtonStyled = styled.button`
  position: relative;
  height: 53px;
  width: 290px;
  background-color: #6550de;
  color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 22.5488px;
  outline-style: none;
  border: none;
  cursor: pointer;

  @media ${DEVICE.laptopL} {
    font-size: 20px;
    width: 250px;
  }

  @media ${DEVICE.laptopL} {
    font-size: 18px;
    width: 200px;
  }

  @media ${DEVICE.tablet} {
    font-size: 20px;
    width: 250px;
    margin-top: 10px;
  }

  &:not(:first-child) {
    margin-left: 10px;

    @media ${DEVICE.tablet} {
      margin-left: 0;
    }
  }

  &:active {
    transform: scale(0.98);
  }

  @media (hover: hover) {
    &:hover {
      background-color: #fec246;
      transition: all 0.4s ease;
    }
  }

  &.big-button {
    width: 405px;
    background-color: #f56748;

    @media ${DEVICE.laptopL} {
      width: 300px;
    }

    @media ${DEVICE.laptop} {
      width: 250px;
    }

    @media ${DEVICE.tablet} {
      width: 250px;
    }
  }

  &.settings {
    margin: 20px 0;
  }

  &.active {
    background-color: #fec246;
  }

  &.button-next {
    background-color: #f56748;

    &:hover {
      background: #fec246;
    }
  }

  &.learn_all-buttons {
    @media (max-width: 1280px) {
      font-size: 18px;
      width: 180px;
    }

    @media ${DEVICE.tablet} {
      font-size: 18px;
      width: 90%;
      height: 40px;
    }
  }
  &.learn_i-dont-know {
    @media (max-width: 1280px) {
      grid-column: 1 / 5;
      width: 90%;
    }
  }

  &.not-active {
    background-color: #b2b2b2;
    cursor: not-allowed;
  }
  }
`;

export default ButtonStyled;
