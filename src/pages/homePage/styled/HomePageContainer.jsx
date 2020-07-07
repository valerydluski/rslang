import styled from 'styled-components';

const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 2fr 6fr 3fr;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export default HomePageContainer;
