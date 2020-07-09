import styled from 'styled-components';

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
`;

export const TranslateStyled = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: #929292;
  grid-area: translate;
`;

export const TextExampleStyled = styled.div`
  grid-area: textExample;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
  color: #929292;
`;

export default LearnCardsContainer;
