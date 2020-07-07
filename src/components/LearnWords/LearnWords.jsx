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
    tryes,
    answer,
  } = props;
  return (
    <LearnWordsContainer>
      <GoHomePageButton />
      <LearnWordCardContainer>
        <ReduxLearnWordsForm
          onSubmit={onSubmit}
          word={word}
          attemptsNumber={tryes}
          isCorrect={isCorrect}
          autocomplete="off"
          settings={settings}
          isTranslationShow={isTranslationShow}
          isRightAnswerShow={isRightAnswerShow}
          answer={answer}
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
  isCorrect: PropTypes.bool.isRequired,
  isRightAnswerShow: PropTypes.bool.isRequired,
  settings: PropTypes.shape().isRequired,
  tryes: PropTypes.number.isRequired,
  answer: PropTypes.string,
};

LearnWords.defaultProps = {
  word: {},
  answer: '',
};
