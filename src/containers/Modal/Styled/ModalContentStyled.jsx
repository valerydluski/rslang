import styled from 'styled-components';
import { DEVICE } from '../../../config'

const ModalContentStyled = styled.div`
  width: calc(25% * ${(props) => props.amount});
  min-width: fit-content;
  text-align: center;
  overflow: auto;
  margin-top: 10px;

  @media ${DEVICE.tablet} {
    width: calc(30% * ${(props) => props.amount});
  }
`;

export default ModalContentStyled;
