import styled from 'styled-components';
import { DEVICE } from '../../../config';

const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;

  @media ${DEVICE.laptop} {
    grid-template-columns: 1fr 6fr 0fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export default HomePageContainer;
