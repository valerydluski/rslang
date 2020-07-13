import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SavannahLivesContainerStyled = styled.div`
  margin-top: 30px;
  display: flex;
  width: fit-content;
  @media ${DEVICE.tablet} {
    margin: 30px auto;
  }
`;

export default SavannahLivesContainerStyled;
