import styled from 'styled-components';
import NextIcon from '../../UI/Icon/next.svg';
import { DEVICE } from '../../../config';

const NextButtonStyled = styled.div`
  font-family: Montserrat;
  background-image: url(${NextIcon});
  background-size: cover;
  border-radius: 100%;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 14px;
  width: 115px;
  height: 115px;
  line-height: 115px;
  margin: 10px auto;
  cursor: pointer;
  color: #000000;
  text-align: center;
  &:hover {
    transform: scale(0.98);
    transition: transform 0.5s ease-in-out;
  }
  @media ${DEVICE.tablet} {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 12px;
  }
`;

const DontKnowButtonStyled = styled(NextButtonStyled)`
  border: 2px solid #f56748;
  background: none;
  user-select: none;
  text-align: center;
`;

const CheckButtonStyled = styled(DontKnowButtonStyled)``;

export { NextButtonStyled, DontKnowButtonStyled, CheckButtonStyled };
