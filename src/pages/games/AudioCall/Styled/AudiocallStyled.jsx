import styled from 'styled-components';

const AudiocallStyled = styled.div`
  background: linear-gradient(
    90deg,
    rgba(193, 172, 232, 1) ${(props) => props.backgroundOpacity}%,
    rgba(255, 207, 207, 1) ${(props) => props.backgroundOpacity + 10}%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  box-sizing: border-box;
  min-height: 896px;
`;

export default AudiocallStyled;
