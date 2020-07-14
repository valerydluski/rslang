import styled from 'styled-components';
import audioIcon from '../../../components/UI/Icon/audioIco.svg';
import { DEVICE } from '../../../config';

const ModalAudioIconStyled = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background-image: url(${audioIcon});
  background-size: cover;
  cursor: pointer;

  @media ${DEVICE.laptopL} {
    width: 32px;
  }

  @media ${DEVICE.laptopL} {
    width: 35px;
    height: 31px;
  }

  @media ${DEVICE.tablet} {
    width: 35px;
    height: 31px;
  }

  @media (max-width: 460px) {
    height: 25px;
    width: 35px;
  }
`;

export default ModalAudioIconStyled;
