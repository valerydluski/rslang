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

const SprintGameContainer = ({
  wordsCollection,
  switchAppMode,
  isWordsLoading,
  secondsForGuessing,
  currentAppMode,
}) => {
  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== 'Sprint') {
    switchAppMode('Sprint');
    return null;
  }
  const currentWordPosition = 0;
  const currentWord = wordsCollection[currentWordPosition];
  const isAnswerCorrect = true;

  return (
    <SprintGameContainerStyled>
      <Timer initialTime={secondsForGuessing} />
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
  secondsForGuessing: PropTypes.number,
  currentAppMode: PropTypes.string,
};

SprintGameContainer.defaultProps = {
  wordsCollection: [],
  switchAppMode: () => {},
  isWordsLoading: false,
  secondsForGuessing: 20,
  currentAppMode: '',
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    isWordsLoading: state.loader.loading,
    secondsForGuessing: state.appSettings,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  addWrongWordsToStore: changeIDontKnowWords,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SprintGameContainer);
