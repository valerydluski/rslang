import styled from 'styled-components';

const ModalWordTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
  div {
    margin-left: 20px;
    width: calc(100% / ${(props) => props.amount});
    text-align: left;
  }
`;

export default ModalWordTextStyled;
