import styled from 'styled-components';

const WordStyled = styled.p`
  font-family: Montserrat;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  margin: 70px 0 0;
`;

const TranslationStyled = styled(WordStyled)`
  text-transform: lowercase;
  color: #b2b2b2;
  margin: 0 0 70px;
`;

export { WordStyled, TranslationStyled };
