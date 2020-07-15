import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SavannahLivesContainerStyled = styled.div`
  display: flex;
  width: fit-content;
  margin-top: auto;
  @media ${DEVICE.tablet} {
    margin: auto auto 0;
  }
`;

export default SavannahLivesContainerStyled;
