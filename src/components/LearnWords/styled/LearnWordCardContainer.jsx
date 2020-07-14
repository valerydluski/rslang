import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnWordCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  @media ${DEVICE.mobileL} {
    padding: 20px 0;
  }
`;

export default LearnWordCardContainer;
