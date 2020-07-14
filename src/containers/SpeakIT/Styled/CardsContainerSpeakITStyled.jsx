import styled from 'styled-components';
import { DEVICE } from '../../../config';

const CardsContainerSpeakITStyled = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'word word word word word'
    'word word word word word';
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  width: 80%;
  max-width: 1280px;
  justify-items: center;
  justify-content: stretch;

  @media ${DEVICE.laptop} {
    grid-template-areas:
      'word word word'
      'word word word';
  }

  @media ${DEVICE.tablet} {
    grid-template-areas:
      'word word word'
      'word word word';
  }

  @media (max-width: 650px) {
    grid-template-areas:
      'word word'
      'word word';
  }

  @media ${DEVICE.mobileL} {
    grid-template-areas:
      'word word'
      'word word';
  }

  @media ${DEVICE.mobileM} {
    grid-template-areas:
      'word'
      'word';
  }
`;

export default CardsContainerSpeakITStyled;
