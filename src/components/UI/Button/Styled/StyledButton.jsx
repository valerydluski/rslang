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

  &:not(:first-child) {
    margin-left: 10px;
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

    @media ${DEVICE.laptopL} {
      width: 300px;
    }

    @media ${DEVICE.laptop} {
      width: 250px;
    }
  }

  &.active {
    background-color: #f56748;
  }
`;

export default ButtonStyled;
