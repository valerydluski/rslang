import styled from 'styled-components';
import { DEVICE } from '../../../../../config';

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  width: 100%;

  @media ${DEVICE.laptopL} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${DEVICE.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export default GamesContainer;
