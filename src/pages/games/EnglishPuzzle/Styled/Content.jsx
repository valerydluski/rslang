import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${DEVICE.laptop} {
    min-height: 650px;
  }
`;

export default Content;
