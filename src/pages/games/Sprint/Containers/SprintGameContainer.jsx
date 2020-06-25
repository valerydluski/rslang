import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeIDontKnowWords } from '../../../../redux/Games/action';
import changeAppMode from '../../../../redux/AppMode/action';
import LoadingSpinner from '../../../../components/LoadingSpinner/LoadingSpinner';
import SprintGameContainerStyled from '../Styled/SprintGameContainerStyled';
import { WordStyled, TranslationStyled } from '../Styled/WordInfoStyled';
import Timer from '../Timer/Timer';
import SprintControlsContainer from './SprintControlsContainer';
import { CorrectMarkerStyled, WrongMarkerStyled } from '../Styled/ResultMarkersStyled';

const SprintGameContainer = ({ wordsCollection, switchAppMode, isWordsLoading }) => {
  if (isWordsLoading) return <LoadingSpinner />;
  if (wordsCollection.length === 0) {
    switchAppMode('AudioCall');
    return null;
  }

  const currentWord = wordsCollection[5];
  const isAnswerCorrect = true;

  return (
    <SprintGameContainerStyled>
      <Timer />
      <WordStyled>{currentWord.word}</WordStyled>
      <TranslationStyled>{currentWord.wordTranslate}</TranslationStyled>
      {isAnswerCorrect ? <CorrectMarkerStyled /> : <WrongMarkerStyled />}
      <SprintControlsContainer />
    </SprintGameContainerStyled>
  );
};

SprintGameContainer.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  switchAppMode: PropTypes.func,
  isWordsLoading: PropTypes.bool,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
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
