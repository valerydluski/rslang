import styled from 'styled-components';
import { DEVICE } from '../../../config';

const LearnCardsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 20% 20% 15% 20% 25%;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'translate image'
    'textExample image'
    'textExampleTranslate trancription'
    'textMeaning textMeaning'
    'textMeaningTranslate textMeaningTranslate';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 1280px;

  @media ${DEVICE.laptopL} {
    width: 1020px;
  }
`;

export const TranslateStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #7d7d7d;
  grid-area: translate;
  place-self: center;
`;

export const TextExampleStyled = styled.div`
  grid-area: textExample;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #7d7d7d;
  display: inline;
  border-bottom: 1px solid #c4c4c4;
  margin-left: 10px;
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
`;

export default LearnCardsContainer;
