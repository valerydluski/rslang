import styled from 'styled-components';
import { DEVICE } from '../../../config';

const WordsContainerStyled = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  user-select: none;
  position: relative;
  bottom: 80px;
  flex-wrap: wrap;
  @media ${DEVICE.tablet} {
    justify-content: flex-start;
    bottom: 30px;
  }
`;

export default WordsContainerStyled;
