import styled from 'styled-components';

const LearnButtonsContainer = styled.div`
  display: grid;
  width: 1280px;
  place-items: center;
  height: 100%;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 60% 40%;
  grid-template-areas:
    'button button button button'
    'text bar bar text';
`;

export const ProgressBarContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  grid-column: 2 / 4;
`;
export const ProgressBarCount = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #929292;
`;

export default LearnButtonsContainer;
