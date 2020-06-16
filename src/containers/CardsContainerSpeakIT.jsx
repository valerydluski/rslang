import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WordCardSpeakIT from '../components/WordCards/WordCardSpeakIT';

const CardsContainerSpeakIT = (props) => {
  const { wordsCollection } = props;
  return <div className="words-speakIT_container"></div>;
};

CardsContainerSpeakIT.propTypes = {
  wordsCollection: PropTypes.objectOf,
};

CardsContainerSpeakIT.defaultProps = {
  wordsCollection: [],
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
  };
};

export default connect(mapStateToProps, null)(CardsContainerSpeakIT);
