import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import SwiperContainer from './Styled/SwiperContainer';

function LearningList({ words }) {
  return (
    <SwiperContainer>
      <List wordsList={words} />;
    </SwiperContainer>
  );
}

LearningList.propTypes = {
  words: PropTypes.instanceOf(Array),
};

LearningList.defaultProps = {
  words: [],
};

const mapStateToProps = (state) => {
  return {
    words: state.dictionary.learningWords,
  };
};

export default connect(mapStateToProps, null)(LearningList);
