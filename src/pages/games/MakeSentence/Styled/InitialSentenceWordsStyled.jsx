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
`;

export { InitialSentenceWordsStyled, MainWordStyled };
