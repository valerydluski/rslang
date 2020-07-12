import styled from 'styled-components';

const HeaderStyled = styled.h2`
  color: #7d7d7d;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
`;

export const HeaderContainerStyled = styled.div`
  border-bottom: 1px solid #c4c4c4;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: start;
  flex-direction: column;
`;

export const BlackHeader = styled.h3`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 28px;
  color: #000000;
`;

export default HeaderStyled;
