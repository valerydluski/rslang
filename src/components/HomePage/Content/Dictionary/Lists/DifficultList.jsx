import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import SwiperContainer from './Styled/SwiperContainer';

function DifficulList({ words }) {
  return (
    <SwiperContainer>
      <List wordsList={words} type="difficult" />;
    </SwiperContainer>
  );
}

DifficulList.propTypes = {
  words: PropTypes.instanceOf(Array),
};

DifficulList.defaultProps = {
  words: [],
};

const mapStateToProps = (state) => {
  return {
    words: state.dictionary.difficultWords,
  };
};

export default connect(mapStateToProps, null)(DifficulList);
