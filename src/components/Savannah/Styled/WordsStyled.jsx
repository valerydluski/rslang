import styled from 'styled-components';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  padding: 10px;
  color: #000000;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 20px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.4s ease-in-out;
  }
`;

const WordFinishedStyled = styled(WordStyled)`
  color: #7d7d7d;
`;

const WordCorrectStyled = styled(WordStyled)`
  color: #000000;
`;

const WordWrongStyled = styled(WordFinishedStyled)`
  color: #f56748;
`;

export { WordStyled, WordFinishedStyled, WordCorrectStyled, WordWrongStyled };
