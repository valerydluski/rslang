import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnButtonsContainer = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  height: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 60% 40%;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media ${DEVICE.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

export const ProgressBarContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  grid-column: 2 / 4;

  @media (max-width: 1280px) {
    grid-column: 2 / 3;
  }

  @media ${DEVICE.tablet} {
    grid-column: none;
    height: auto;
  }
`;
export const ProgressBarCount = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #7d7d7d;

  @media ${DEVICE.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export default LearnButtonsContainer;
