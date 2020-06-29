import styled from 'styled-components';
import audioIcon from '../../../components/UI/Icon/audioIco.svg';

const ModalAudioIconStyled = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(${audioIcon});
  background-size: cover;
  cursor: pointer;
`;

export default ModalAudioIconStyled;
