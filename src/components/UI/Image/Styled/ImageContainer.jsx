import styled from 'styled-components';
import { DEVICE } from '../../../../config';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  &.image_speakIT {
    margin-top: 55px;
    justify-self: center;
    height: 100%;
  }

  &.image_learn {
    width: 210px;
    height: 210px;
    & > img {
      width: 100%;
      height: 100%;
    }
    @media ${DEVICE.tablet} {
      width: 140px;
      height: 140px;
    }
  }
`;

export default ImageContainer;
