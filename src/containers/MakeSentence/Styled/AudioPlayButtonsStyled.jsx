import styled, { keyframes } from 'styled-components';
import speakerIcon from '../../../components/UI/Icon/speaker.svg';
import snailIcon from '../../../assets/img/snail.svg';

const pulse = keyframes`
  25% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
`;

const AudioPlayButtonStyled = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin-right: 15px;
  background: url(${speakerIcon}) no-repeat center center,
    linear-gradient(rgba(101, 80, 222, 1), rgba(101, 80, 222, 1));
  background-size: 40px 40px, cover;
  border-radius: 100%;
`;

const ActiveAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  animation: ${pulse} 2s linear infinite;
  background: url(${speakerIcon}) no-repeat center center, linear-gradient(#404497, #404497);
  background-size: 40px 40px, cover;
`;

const SlowAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  background: url(${snailIcon}) no-repeat center center,
    linear-gradient(rgba(101, 80, 222, 1), rgba(101, 80, 222, 1));
  background-size: 40px 40px, cover;
`;

const ActiveSlowAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  animation: ${pulse} 4s linear infinite;
  background: url(${snailIcon}) no-repeat center center, linear-gradient(#404497, #404497);
  background-size: 40px 40px, cover;
`;

export {
  AudioPlayButtonStyled,
  ActiveAudioPlayButtonStyled,
  SlowAudioPlayButtonStyled,
  ActiveSlowAudioPlayButtonStyled,
};
