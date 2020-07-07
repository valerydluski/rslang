import styled from 'styled-components';

const GamesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
    gap: 40px;
  }
`;

export default GamesContainer;
