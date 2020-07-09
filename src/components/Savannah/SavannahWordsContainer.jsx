import React from 'react';
import PropTypes from 'prop-types';
import WordsContainerStyled from './Styled/WordsContainerStyled';
import {
  WordStyled,
  WordFinishedStyled,
  WordCorrectStyled,
  WordWrongStyled,
} from './Styled/WordsStyled';

const SavannahWordsContainer = ({
  currentStepWords,
  isWordFinished,
  processAnswer,
  selectedWord,
  currentWord,
}) => {
  let words;
  let finishedWords;

  if (!isWordFinished) {
    words = currentStepWords.map((word, i) => {
      return (
        <WordStyled key={word.wordTranslate} onClick={() => processAnswer(i)}>{`${i + 1}.
  ${word.wordTranslate}`}</WordStyled>
      );
    });
  }

  if (isWordFinished) {
    finishedWords = currentStepWords.map((word, i) => {
      if (word.word === currentWord) {
        return (
          <WordCorrectStyled key={word.wordTranslate}>{`${i + 1}.
      ${word.wordTranslate}`}</WordCorrectStyled>
        );
      }
      if (word.word === selectedWord && word.word !== currentWord) {
        return (
          <WordWrongStyled key={word.wordTranslate}>{`${i + 1}.
        ${word.wordTranslate}`}</WordWrongStyled>
        );
      }
      return (
        <WordFinishedStyled key={word.wordTranslate}>{`${i + 1}.
      ${word.wordTranslate}`}</WordFinishedStyled>
      );
    });
  }

  return isWordFinished ? (
    <WordsContainerStyled>{finishedWords}</WordsContainerStyled>
  ) : (
    <>
      <WordsContainerStyled>{words}</WordsContainerStyled>
    </>
  );
};

SavannahWordsContainer.propTypes = {
  currentStepWords: PropTypes.instanceOf(Array),
  isWordFinished: PropTypes.bool,
  processAnswer: PropTypes.func,
  selectedWord: PropTypes.string,
  currentWord: PropTypes.string,
};

SavannahWordsContainer.defaultProps = {
  currentStepWords: [],
  isWordFinished: false,
  processAnswer: () => {},
  selectedWord: '',
  currentWord: '',
};

export default SavannahWordsContainer;
