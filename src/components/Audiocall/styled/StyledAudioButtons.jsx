import styled from 'styled-components';
import AudioIcon from '../../UI/Icon/audioIco.svg';

const AudioPlayButtonStyled = styled.div`
  width: 52px;
  height: 52px;
  background-image: url(${AudioIcon});
  background-size: cover;
  cursor: pointer;
  margin-right: 20px;
  &:hover {
    transform: scale(0.95);
    transition: transform 0.5s ease-in-out;
  }
`;

const BigAudioPlayButtonStyled = styled(AudioPlayButtonStyled)`
  width: 210px;
  height: 210px;
  margin: 0 auto 140px;
  margin-top: calc(100vh / 8);
  &:hover {
    transform: scale(0.98);
  }
`;

export { AudioPlayButtonStyled, BigAudioPlayButtonStyled };
