import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnCardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 20% 20% 15% 20% 25%;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'top top'
    'top top'
    'textExampleTranslate trancription'
    'textMeaning textMeaning'
    'textMeaningTranslate textMeaningTranslate';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 100%;

  @media ${DEVICE.tablet} {
    margin-top: 65px;
    grid-template-rows: 40% 15% 15% 15% 15%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'top'
      'trancription'
      'textExampleTranslate'
      'textMeaning'
      'textMeaningTranslate';
  }
`;

export const TranslateStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 34px;
  color: #7d7d7d;
  grid-area: translate;
  place-self: center;
  height: 100%;

  @media (max-width: 1280px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const TextExampleStyled = styled.div`
  grid-area: textExample;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #7d7d7d;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;
`;

export const TextExampleTranslateStyled = styled.div`
  grid-area: textExampleTranslate;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const TextMeaningStyled = styled.div`
  grid-area: textMeaning;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;

  @media (max-width: 1280px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const TextMeaningTranslateStyled = styled.div`
  grid-area: textMeaningTranslate;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 25.1118px;
  line-height: 31px;
  color: #b2b2b2;
  margin-left: 10px;
  margin-right: 10px;
  height: 100%;

  @media (max-width: 1280px) {
    font-size: 20px;
  }

  @media ${DEVICE.tablet} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const TopContnentStyled = styled.div`
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
  height: 100%;
  grid-area: top;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'translate image'
    'textExample image';

  @media ${DEVICE.tablet} {
    grid-template-rows: 40% 20% 40%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'image'
      'translate'
      'textExample';
  }
`;
export default LearnCardsContainer;
