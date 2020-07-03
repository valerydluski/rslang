import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import SwiperContainer from './Styled/SwiperContainer';
import Loader from '../Loader/Loader';

function DifficulList({ words, isLoading }) {
  return (
    <SwiperContainer>
      {isLoading ? <Loader /> : <List wordsList={words} type="difficult" />}
    </SwiperContainer>
  );
}

DifficulList.propTypes = {
  words: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
};

DifficulList.defaultProps = {
  words: [],
  isLoading: false,
};

const mapStateToProps = (state) => {
  return {
    words: state.dictionary.difficultWords,
    isLoading: state.dictionaryLoaderReducer.loading,
  };
};

export default connect(mapStateToProps, null)(DifficulList);
