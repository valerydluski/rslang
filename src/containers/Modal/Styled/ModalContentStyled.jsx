import styled from 'styled-components';

const ModalContentStyled = styled.div`
  width: calc(25% * ${(props) => props.amount});
  min-width: fit-content;
  text-align: center;
  overflow: auto;
  margin-top: 10px;
`;

export default ModalContentStyled;
