import styled from 'styled-components';
import { DEVICE } from '../../../config';

const SprintScoreStyled = styled.div`
  font-weight: bold;
  font-size: 56px;
  color: #000000;

  @media ${DEVICE.tablet} {
    font-size: 40px;
  }
`;
export default SprintScoreStyled;
