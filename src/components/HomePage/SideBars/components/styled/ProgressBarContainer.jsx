import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    margin: 0;
    text-align: left;
    font-size: 23px;
    line-height: 28px;
    font-weight: bold;
    color: #7d7d7d;
    padding-bottom: 5px;
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 30px;
    align-self: stretch;
  }

  & .total-progress-container {
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .total-progress {
    width: 200px;
    height: 200px;
  }
`;

export default ProgressBarContainer;
