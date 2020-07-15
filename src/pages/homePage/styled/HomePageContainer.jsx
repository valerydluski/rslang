import styled from 'styled-components';
import { DEVICE } from '../../../config';

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;

  @media ${DEVICE.laptop} {
    grid-template-columns: auto;
    display: flex;
    flex-direction: column;
  }

  @media ${DEVICE.tablet} {
    grid-template-columns: auto;
  }
`;

export default HomePageContainer;
