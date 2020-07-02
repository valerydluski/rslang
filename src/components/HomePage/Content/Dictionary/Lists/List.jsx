import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperContainer from './Styled/SwiperContainer';
import Slide from './Styled/Slide';
import 'swiper/css/swiper.css';

function LearningList() {
  const params = {
    direction: 'vertical',
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 10,
    mousewheel: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  return (
    <SwiperContainer>
      <Swiper {...params}>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #1</Slide>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <Slide>Slide #2</Slide>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #3</Slide>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <Slide>Slide #4</Slide>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #5</Slide>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #1</Slide>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <Slide>Slide #2</Slide>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #3</Slide>
        </div>
        <div style={{ backgroundColor: 'red' }}>
          <Slide>Slide #4</Slide>
        </div>
        <div style={{ backgroundColor: 'blue' }}>
          <Slide>Slide #5</Slide>
        </div>
      </Swiper>
    </SwiperContainer>
  );
}

export default LearningList;
