import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import SwiperContainer from './Styled/SwiperContainer';

function DeletedList({ words }) {
  return (
    <SwiperContainer>
      <List wordsList={words} type="deleted" />;
    </SwiperContainer>
  );
}

DeletedList.propTypes = {
  words: PropTypes.instanceOf(Array),
};

DeletedList.defaultProps = {
  words: [],
};

const mapStateToProps = (state) => {
  return {
    words: state.dictionary.deletedWords,
  };
};

export default connect(mapStateToProps, null)(DeletedList);
