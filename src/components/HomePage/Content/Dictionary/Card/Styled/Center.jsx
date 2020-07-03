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
    &:first-child {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
`;

export default Center;
