import styled from 'styled-components';
import { DEVICE } from '../../../config';

const title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;

  @media ${DEVICE.tablet} {
    font-size: 14px;
  }
`;

export default title;
