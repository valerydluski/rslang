import styled from 'styled-components';
import { DEVICE } from '../../../config';

const StyledPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;

  @media ${DEVICE.laptopL} {
    width: 188px;
  }

  @media ${DEVICE.laptop} {
    width: 100px;
  }

  @media ${DEVICE.tablet} {
    width: 0;
  }
`;
export default StyledPattern;
