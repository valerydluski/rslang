/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Swiper from 'react-id-swiper';
import PropTypes from 'prop-types';
import { Translate } from 'react-redux-i18n';
import SwiperContainer from './Styled/SwiperContainer';
import EmptyListMessage from './Styled/EmptyListMessage';
import Card from '../../../../../containers/Homepage/Dictionary/Card/Card';
import 'swiper/css/swiper.css';

function List({ wordsList, type }) {
  const params = {
    direction: 'vertical',
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    mousewheel: true,
    shouldSwiperUpdate: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  return (
    <SwiperContainer>
      {wordsList.length === 0 ? (
        <EmptyListMessage>
          <Translate value="Dictionary.emptyList" />
        </EmptyListMessage>
      ) : (
        <Swiper {...params}>
          {wordsList.map((item) => (
            <div key={item.word}>
              <Card item={item} type={type} />
            </div>
          ))}
        </Swiper>
      )}
    </SwiperContainer>
  );
}

List.propTypes = {
  wordsList: PropTypes.instanceOf(Array),
  type: PropTypes.string,
};

List.defaultProps = {
  wordsList: [],
  type: 'learning',
};

export default List;
