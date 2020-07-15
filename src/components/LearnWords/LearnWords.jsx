import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import LearnWordsContainer from './styled/LearnWordsContainer';
import LearnWordCardContainer from './styled/LearnWordCardContainer';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ReduxLearnWordsForm from '../../containers/LearnWords/LearnWordsForm';

export default function LearnWords(props) {
  const {
    onSubmit,
    word,
    isCorrect,
    settings,
    isTranslationShow,
    isRightAnswerShow,
    answer,
    isResultShow,
    wordsCount,
    currentWordIndex,
    audiosDuration,
    isInputActive,
    audioIsPlaying,
    isSoundPlay,
  } = props;
  return (
    <LearnWordsContainer>
      <GoHomePageButton />
      <LearnWordCardContainer>
        <ReduxLearnWordsForm
          onSubmit={onSubmit}
          word={word}
          isCorrect={isCorrect}
          autocomplete="off"
          settings={settings}
          isTranslationShow={isTranslationShow}
          isRightAnswerShow={isRightAnswerShow}
          answer={answer}
          isResultShow={isResultShow}
          wordsCount={wordsCount}
          currentWordIndex={currentWordIndex}
          audiosDuration={audiosDuration}
          isInputActive={isInputActive}
          audioIsPlaying={audioIsPlaying}
          isSoundPlay={isSoundPlay}
        />
      </LearnWordCardContainer>
      <Line percent="30" strokeWidth="400" strokeColor="#404497" />
    </LearnWordsContainer>
  );
}

LearnWords.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  word: PropTypes.shape({}),
  isTranslationShow: PropTypes.bool.isRequired,
  audioIsPlaying: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isInputActive: PropTypes.bool.isRequired,
  isRightAnswerShow: PropTypes.bool.isRequired,
  settings: PropTypes.shape().isRequired,
  answer: PropTypes.string,
  isResultShow: PropTypes.bool,
  wordsCount: PropTypes.number,
  currentWordIndex: PropTypes.number,
  audiosDuration: PropTypes.number,
  isSoundPlay: PropTypes.bool.isRequired,
};

LearnWords.defaultProps = {
  word: {},
  answer: '',
  isResultShow: false,
  wordsCount: 0,
  currentWordIndex: 0,
  audiosDuration: -1,
};
