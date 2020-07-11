import styled from 'styled-components';

const Center = styled.div`
  margin: 0 30px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  & > p.word {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
    color: #000;
  }
  & > p.additional {
    margin: 0;
    font-size: 12px;
    color: #929292;
    margin-bottom: 5px;
  }

  & > p.info {
    margin: 0;
    font-size: 12px;
    color: #929292;
    margin-bottom: 5px;
  }
`;

export default Center;
