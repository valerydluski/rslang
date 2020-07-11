import styled from 'styled-components';
import { DEVICE } from '../../../config';

const InitialSentenceContainerStyled = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${DEVICE.laptop} {
    margin-top: 20px;
  }

  @media ${DEVICE.tablet} {
    margin-top: 10px;
  }
`;

export default InitialSentenceContainerStyled;
