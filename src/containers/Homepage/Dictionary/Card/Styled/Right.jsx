import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const Right = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media ${DEVICE.mobileL} {
    flex-direction: row;
    width: auto;
  }
`;

export default Right;
