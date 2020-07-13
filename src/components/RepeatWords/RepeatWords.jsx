import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import RepeatWordsContainer from './styled/RepeatWordsContainer';
import RepeatWordCardContainer from './styled/RepeatWordsCardContainer';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ReduxRepeatWordsForm from '../../containers/RepeatWords/RepeatWordsForm';

export default function RepeatWords(props) {
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
    showButtons,
    isInputActive,
  } = props;
  return (
    <RepeatWordsContainer>
      <GoHomePageButton />
      <RepeatWordCardContainer>
        <ReduxRepeatWordsForm
          onSubmit={onSubmit}
          word={word}
          isCorrect={isCorrect}
          showButtons={showButtons}
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
        />
      </RepeatWordCardContainer>
      <Line percent="30" strokeWidth="400" strokeColor="#404497" />
    </RepeatWordsContainer>
  );
}

RepeatWords.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  word: PropTypes.shape({}),
  isTranslationShow: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  showButtons: PropTypes.bool.isRequired,
  isRightAnswerShow: PropTypes.bool.isRequired,
  settings: PropTypes.shape().isRequired,
  answer: PropTypes.string,
  isResultShow: PropTypes.bool,
  isInputActive: PropTypes.bool.isRequired,
  wordsCount: PropTypes.number,
  currentWordIndex: PropTypes.number,
  audiosDuration: PropTypes.number,
};

RepeatWords.defaultProps = {
  word: {},
  answer: '',
  isResultShow: false,
  wordsCount: 0,
  currentWordIndex: 0,
  audiosDuration: -1,
};
