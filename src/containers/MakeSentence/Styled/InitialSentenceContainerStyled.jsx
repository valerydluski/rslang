import styled from 'styled-components';
import { DEVICE } from '../../../config';

const InitialSentenceContainerStyled = styled.div`
  margin: 50px auto;
  display: flex;

  @media ${DEVICE.laptop} {
    margin: 20px auto;
  }

  @media ${DEVICE.tablet} {
    margin: 10px auto;
  }
`;

export default InitialSentenceContainerStyled;
