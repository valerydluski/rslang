import styled from 'styled-components';

const AudiocallStyled = styled.div`
  background: linear-gradient(
    90deg,
    rgba(193, 172, 232, 1) ${(props) => props.backgroundOpacity}%,
    rgba(255, 207, 207, 1) ${(props) => props.backgroundOpacity + 10}%
  );
  padding-bottom: 20px;
`;

export default AudiocallStyled;
