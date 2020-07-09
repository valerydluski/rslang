import styled from 'styled-components';

const WordStyled = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  padding: 10px;
  color: #000000;
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
  color: #929292;
  &:hover {
    background-color: none;
  }
`;

const WordCorrectStyled = styled(WordStyled)`
  background-color: rgb(101, 80, 222);
  &:hover {
    background-color: rgb(101, 80, 222);
  }
`;
const WordWrongStyled = styled(WordFinishedStyled)`
  background-color: rgb(245, 103, 72);
  &:hover {
    background-color: rgb(245, 103, 72);
  }
`;

export { WordStyled, WordFinishedStyled, WordCorrectStyled, WordWrongStyled };
