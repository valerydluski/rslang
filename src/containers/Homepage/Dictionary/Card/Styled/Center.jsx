import styled from 'styled-components';

const Center = styled.div`
  width: 60%;
  margin: 0 5%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  & > p {
    margin: 0;
    font-size: 16px;
    color: #929292;
    margin-top: 10px;
    &:first-child {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #000;
      margin-top: 0;
    }
  }
`;

export default Center;
