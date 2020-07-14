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
    width: 33px;
    height: 30px;
  }

  @media ${DEVICE.tablet} {
    height: 23px;
    width: 24px;
  }
`;

export default ModalAudioIconStyled;
