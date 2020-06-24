import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIDontKnowWords } from '../../../../redux/Games/action';
// import ResultModal from '../../../containers/Modal/ResultModal';
// import shuffleArray from '../../../utils/shuffleArray';
import changeAppMode from '../../../../redux/AppMode/action';
import Loader from '../../../../components/Loader/Loader';
import SprintGameContainerStyled from '../Styled/SprintGameContainerStyled';

const SprintGameContainer = ({
  wordsCollection,
  addWrongWordsToStore,
  switchAppMode,
  isWordsLoading,
}) => {
  if (isWordsLoading) return <Loader />;
  if (wordsCollection.length === 0) {
    switchAppMode('AudioCall');
    return null;
  }
  const currentWord = wordsCollection[0];
  return <SprintGameContainerStyled />;
};

SprintGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  addWrongWordsToStore: PropTypes.func,
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  addWrongWordsToStore: () => {},
  switchAppMode: () => {},
  isWordsLoading: false,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
  };
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintGameContainer);
