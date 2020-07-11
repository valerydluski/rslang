import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ContentContainer = styled.main`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 75px 75px 0;
  overflow: auto;
  max-height: 100vh;

  @media ${DEVICE.laptopL} {
    padding: 30px;
  }

  @media ${DEVICE.laptop} {
    padding: 40px 40px 0;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  @media ${DEVICE.tablet} {
    grid-column-start: auto;
    grid-column-end: auto;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media (max-width: 380px) {
    width: 94vw;
  }
  overflow: auto;
  max-height: 100vh;
`;

export default ContentContainer;
