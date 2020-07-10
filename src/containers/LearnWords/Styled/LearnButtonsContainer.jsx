import styled from 'styled-components';

const LearnButtonsContainer = styled.div`
  display: grid;
  width: 1280px;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;

export const ProgressBarContainer = styled.div``;
export const ProgressBarCount = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #929292;
`;

export default LearnButtonsContainer;
