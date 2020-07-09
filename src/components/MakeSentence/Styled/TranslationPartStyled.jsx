import styled from 'styled-components';

const TranslationPartStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 60px;
  line-height: 40px;
  font-weight: 500;
  font-size: 20px;
  width: ${(props) => props.width}px;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid grey;
  cursor: pointer;
  user-select: none;
`;

export default TranslationPartStyled;
