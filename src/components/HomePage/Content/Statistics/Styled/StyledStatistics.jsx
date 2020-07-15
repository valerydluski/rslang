import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const StyledStatistics = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media ${DEVICE.laptop} {
    padding: 30px 30px 0 290px;
    overflow-y: visible;
  }

  @media ${DEVICE.tablet} {
    padding: 30px;
  }
`;

export default StyledStatistics;
