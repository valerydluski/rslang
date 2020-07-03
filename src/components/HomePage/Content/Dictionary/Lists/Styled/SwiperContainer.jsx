import styled from 'styled-components';

const SwiperContainer = styled.div`
  overflow: hidden;
  height: calc(100vh - 180px);
  width: 800px;
  & .swiper-container {
    height: 100%;
  }
`;

export default SwiperContainer;
