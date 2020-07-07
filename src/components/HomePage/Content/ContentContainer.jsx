import styled from 'styled-components';

const ContentContainer = styled.main`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 75px 75px 0;

  @media (max-width: 767px) {
    padding: 50px 50px 0;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  @media (max-width: 630px) {
    padding: 30px 30px 0;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (max-width: 380px) {
    width: 79%;
  }
`;

export default ContentContainer;
