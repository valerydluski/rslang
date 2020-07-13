import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SavannahGameContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${DEVICE.laptop} {
    min-height: 700px;
  }
  @media ${DEVICE.tablet} {
    min-height: 600px;
  }
`;

export default SavannahGameContainerStyled;
