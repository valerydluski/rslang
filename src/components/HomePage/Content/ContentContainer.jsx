import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ContentContainer = styled.main`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 75px 75px 0;

  @media ${DEVICE.laptop} {
    padding: 50px 50px 0;
  }

  @media ${DEVICE.tablet} {
    grid-row-start: 3;
    grid-row-end: 4;
  }

  overflow: auto;
  max-height: 100vh;
`;

export default ContentContainer;
