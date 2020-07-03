import styled from 'styled-components';

const Center = styled.div`
  width: 60%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    margin: 0;
    font-size: 16px;
    color: #929292;
    &:first-child {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #000;
    }
  }
`;

export default Center;
