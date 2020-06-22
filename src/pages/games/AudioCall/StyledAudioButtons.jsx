import styled from 'styled-components';
import AudioIcon from '../../../components/UI/Icon/audioIco.svg';

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
  width: 200px;
  height: 200px;
  margin: 50px auto 120px;
  &:hover {
    transform: scale(0.98);
  }
`;

export { AudioPlayButtonStyled, BigAudioPlayButtonStyled };
