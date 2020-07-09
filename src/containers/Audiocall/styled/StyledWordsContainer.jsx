import styled from 'styled-components';
import { DEVICE } from '../../../config';

const WordsContainerStyled = styled.div`
  display: flex;
  margin: 0 auto 50px;
  padding: 20px 30px;
  justify-content: space-between;
  max-width: 1440px;
  border-top: 1px solid #c4c4c4;
  user-select: none;
  box-sizing: border-box;

  @media ${DEVICE.laptopL} {
    max-width: 1024px;
  }

  @media ${DEVICE.laptop} {
    max-width: 768px;
    padding: 20px 0;
  }

  @media ${DEVICE.tablet} {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-bottom: 0;
  }
`;

export default WordsContainerStyled;
