import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import GameContainerSpeakIT from '../../../containers/SpeakIT/GameContainerSpeakIT';
import SpeakITContainerStyled from '../../../containers/SpeakIT/Styled/StyledSpeakIT';
import { changeAppMode } from '../../../redux/AppMode/action';

const SpeakIT = (props) => {
  const { isWordsLoading, wordsCollection } = props;

  const [words, changeWords] = useState(wordsCollection);
  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  if (isWordsLoading) return <LoadingSpinner />;

  return (
    <SpeakITContainerStyled>
      <GameContainerSpeakIT key={wordsCollection.join()} wordsCollection={words} />
    </SpeakITContainerStyled>
  );
};

SpeakIT.propTypes = {
  isWordsLoading: PropTypes.bool.isRequired,
  wordsCollection: PropTypes.instanceOf(Array),
};

SpeakIT.defaultProps = {
  wordsCollection: [],
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
