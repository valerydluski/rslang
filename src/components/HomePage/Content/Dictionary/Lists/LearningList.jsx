import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import SwiperContainer from './Styled/SwiperContainer';
import Loader from '../Loader/Loader';

function LearningList({ words, isLoading }) {
  return <SwiperContainer>{isLoading ? <Loader /> : <List wordsList={words} />}</SwiperContainer>;
}

LearningList.propTypes = {
  words: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
};

LearningList.defaultProps = {
  words: [],
  isLoading: false,
};

const mapStateToProps = (state) => {
  return {
    words: state.dictionary.learningWords,
    isLoading: state.dictionaryLoaderReducer.loading,
  };
};

export default connect(mapStateToProps, null)(LearningList);
