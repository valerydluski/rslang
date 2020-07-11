import styled from 'styled-components';

const SwiperContainer = styled.div`
  overflow: hidden;
  height: calc(100vh - 345px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  & .swiper-container {
    height: 100%;
    width: 100%;
  }
`;

export default SwiperContainer;
