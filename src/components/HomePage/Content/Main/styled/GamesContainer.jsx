import styled from 'styled-components';

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  width: 106%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 15px;
  }

  @media (max-width: 767px) {
    grid-template-columns: auto;
    gap: 40px;
  }
`;

export default GamesContainer;
