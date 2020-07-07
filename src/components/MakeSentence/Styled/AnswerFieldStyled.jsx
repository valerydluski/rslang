import styled from 'styled-components';

const AnswerFieldStyled = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  border: 1px solid grey;
  background: linear-gradient(180deg, #fff 40%, #f0f0f0);
  div:last-child {
    margin-right: 10px;
  }
`;

export default AnswerFieldStyled;
