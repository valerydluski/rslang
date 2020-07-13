import styled from 'styled-components';
import { DEVICE } from '../../../config';

const ContentContainer = styled.main`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  overflow-y: auto;
  max-height: 100vh;

  @media ${DEVICE.laptop} {
    grid-column-start: 2;
    grid-column-end: 3;
    padding-left: 290px;
    overflow-y: visible;
    max-height: 100%;
  }

  @media ${DEVICE.tablet} {
    padding-left: 30px;
    grid-column-start: auto;
    grid-column-end: auto;
    grid-row-start: 3;
    grid-row-end: 4;
    height: auto;
  }
`;

export default ContentContainer;
