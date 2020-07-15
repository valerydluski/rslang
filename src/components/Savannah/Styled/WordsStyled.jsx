import styled from 'styled-components';
import { DEVICE } from '../../../config';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  padding: 10px;
  color: #000000;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.4s ease-in-out;
  }
  @media ${DEVICE.laptop} {
    &:not(:first-child) {
      margin-left: 0;
    }
    font-size: 30px;
    width: 45%;
    padding: 15px 0;
    box-sizing: border-box;
    &:nth-child(2n) {
      text-align: right;
    }
  }
  @media ${DEVICE.tablet} {
    &:not(:first-child) {
      margin-left: 0;
    }
    font-size: 25px;
    width: 100%;
    box-sizing: border-box;
    &:nth-child(n) {
      text-align: center;
    }
  }
`;

const WordFinishedStyled = styled(WordStyled)`
  color: #7d7d7d;
`;

const WordCorrectStyled = styled(WordStyled)`
  color: #000000;
`;

const WordWrongStyled = styled(WordFinishedStyled)`
  color: #f56748;
`;

export { WordStyled, WordFinishedStyled, WordCorrectStyled, WordWrongStyled };
