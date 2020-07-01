import styled from 'styled-components';
import { DEVICE } from '../../../config';

const title = styled.span`
  font-size: 24px;

  @media ${DEVICE.laptop} {
    font-size: 16px;
  }
`;

export default title;
