import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ButtonsContainerStyled = styled.div`
  display: flex;
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  @media ${DEVICE.mobileL} {
    flex-direction: column;
  }
`;

export default ButtonsContainerStyled;
