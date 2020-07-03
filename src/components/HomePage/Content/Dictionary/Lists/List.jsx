/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import SwiperContainer from './Styled/SwiperContainer';
import Card from '../Card/Card';
import 'swiper/css/swiper.css';

function List({ wordsList }) {
  const params = {
    direction: 'vertical',
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    mousewheel: true,
    rebuildOnUpdate: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  return (
    <SwiperContainer>
      <Swiper {...params}>
        {wordsList.map((item) => (
          <div key={item.word}>
            <Card {...item} />
          </div>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}

List.propTypes = {
  wordsList: PropTypes.instanceOf(Array),
};

List.defaultProps = {
  wordsList: [],
};

export default List;
