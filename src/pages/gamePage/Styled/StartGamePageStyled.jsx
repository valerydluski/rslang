import styled from 'styled-components';
import background from '../../../assets/img/start-page-back.svg';

const StartGamePageStyled = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-position-y: 120px;
  background-size: cover;
  background-image: url(${background});
  color: #000000;
`;

export default StartGamePageStyled;
