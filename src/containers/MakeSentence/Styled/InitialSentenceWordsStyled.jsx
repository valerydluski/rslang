import styled from 'styled-components';

const InitialSentenceWordsStyled = styled.div`
  text-align: center;
  height: 70px;
  line-height: 70px;
  font-weight: 500;
  font-size: 30px;
  margin-left: 10px;
`;

const MainWordStyled = styled(InitialSentenceWordsStyled)`
  font-weight: 800;
  cursor: pointer;
  position: relative;
  text-decoration: underline;
  div {
    position: absolute;
    height: fit-content;
    width: fit-content;
    line-height: 30px;
    top: 55px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
`;

export { InitialSentenceWordsStyled, MainWordStyled };
