import styled from 'styled-components';
import backgroundImage from '../../../../assets/img/background.png';

const AudiocallStyled = styled.div`
  background: url(${backgroundImage});
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
`;

export default AudiocallStyled;
