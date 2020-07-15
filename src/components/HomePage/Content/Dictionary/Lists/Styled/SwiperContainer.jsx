import styled from 'styled-components';
import { DEVICE } from '../../../../../../config';

const SwiperContainer = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  & .swiper-container {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  @media ${DEVICE.laptop} {
    height: 600px;
  }

  @media ${DEVICE.tablet} {
  }
`;

export default SwiperContainer;
