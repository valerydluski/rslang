import styled from 'styled-components';
import { DEVICE } from '../../../config';

const WordsContainerStyled = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 20px;
  justify-content: center;
  border-top: 1px solid #c4c4c4;
  user-select: none;
  width: 100%;
  margin-top: 10px;
  flex-wrap: wrap;
  @media ${DEVICE.tablet} {
    justify-content: flex-start;
  }
`;

export default WordsContainerStyled;
