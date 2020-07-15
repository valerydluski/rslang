import styled from 'styled-components';

const RoundStatisticStyled = styled.div`
  width: 80%;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      transition: background-color 0.4s ease-in-out;
    }
  }
`;

export default RoundStatisticStyled;
