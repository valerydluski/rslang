import styled from 'styled-components';

const WordStyled = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  margin: 100px 0 5px;
`;

const TranslationStyled = styled(WordStyled)`
  text-transform: lowercase;
  color: #c4c4c4;
  margin: 0 0 80px;
`;

export { WordStyled, TranslationStyled };
