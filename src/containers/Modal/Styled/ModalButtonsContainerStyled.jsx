import styled from 'styled-components';
import { DEVICE } from '../../../config'

const ModalButtonsContainerStyled = styled.div`
  display: flex;
  width: 95%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  @media ${DEVICE.tablet} {
    flex-direction: column;
  }
`;

export default ModalButtonsContainerStyled;
