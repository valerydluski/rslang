import styled from 'styled-components';

const DayInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  flex-grow: 1;
  max-height: 130px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & h3 {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #c4c4c4;
  }

  & p {
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
  }
`;

export default DayInfoContainer;
