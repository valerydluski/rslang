import styled from 'styled-components';

const SentencePartsContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  margin-left: 30px;
  flex-wrap: wrap;
  width: 70%;
  align-items: center;
  justify-content: center;
  user-select: none;
  div:first-child {
    margin-left: 0;
  }
`;

export default SentencePartsContainerStyled;
