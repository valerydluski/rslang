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
  background-color: rgba(254, 194, 70, 0.8);
  &:hover {
    background-color: rgba(254, 194, 70, 0.8);
  }
`;

const WordWrongStyled = styled(WordFinishedStyled)`
  text-decoration: line-through;
  background-color: rgba(245, 103, 72, 0.8);
  &:hover {
    background-color: rgba(245, 103, 72, 0.8);
  }
`;

export { WordStyled, WordFinishedStyled, WordCorrectStyled, WordWrongStyled };
