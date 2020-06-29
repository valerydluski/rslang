import styled from 'styled-components';

const ModalWordTextStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
  div {
    margin: 5px 0 5px 20px;
    width: calc(90% / ${(props) => props.amount});
    text-align: left;
  }
  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      transition: background-color 0.4s ease-in-out;
    }
  }
`;

export default ModalWordTextStyled;
