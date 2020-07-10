import styled, { keyframes } from 'styled-components';
import speakerIcon from '../../../components/UI/Icon/speaker.svg';
import snailIcon from '../../../assets/img/snail.svg';
import { DEVICE } from '../../../config';

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
  flex-shrink: 0;

  @media ${DEVICE.laptop} {
    width: 50px;
    height: 50px;
    background-size: 30px 30px, cover;
  }
`;

const ActiveAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  animation: ${pulse} 2s linear infinite;
  background: url(${speakerIcon}) no-repeat center center, linear-gradient(#404497, #404497);
  background-size: 40px 40px, cover;

  @media ${DEVICE.laptop} {
    background-size: 30px 30px, cover;
  }
`;

const SlowAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  margin-right: 0;
  background: url(${snailIcon}) no-repeat center center,
    linear-gradient(rgba(101, 80, 222, 1), rgba(101, 80, 222, 1));
  background-size: 40px 40px, cover;

  @media ${DEVICE.laptop} {
    background-size: 30px 30px, cover;
  }
`;

const ActiveSlowAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  animation: ${pulse} 4s linear infinite;
  background: url(${snailIcon}) no-repeat center center, linear-gradient(#404497, #404497);
  background-size: 40px 40px, cover;

  @media ${DEVICE.laptop} {
    background-size: 30px 30px, cover;
  }
`;

export {
  AudioPlayButtonStyled,
  ActiveAudioPlayButtonStyled,
  SlowAudioPlayButtonStyled,
  ActiveSlowAudioPlayButtonStyled,
};
