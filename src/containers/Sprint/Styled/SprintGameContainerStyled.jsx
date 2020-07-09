import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SprintGameContainerStyled = styled.div`
  width: 60%;
  margin: 50px auto;
  position: relative;

  @media ${DEVICE.tablet} {
    width: 80%;
  }

  @media ${DEVICE.mobileL} {
    width: 100%;
  }
`;
export default SprintGameContainerStyled;
