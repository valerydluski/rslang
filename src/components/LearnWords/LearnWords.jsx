import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import LearnWordsContainer from './styled/LearnWordsContainer';
import LearnWordCardContainer from './styled/LearnWordCardContainer';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ReduxLearnWordsForm from '../../containers/LearnWords/LearnWordsForm';

export default function LearnWords(props) {
  console.log('LearnWords -> props', props);
  const {
    onSubmit,
    word,
    isCorrect,
    settings,
    isTranslationShow,
    isRightAnswerShow,
    answer,
    isResultShow,
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
  answer: PropTypes.string,
  isResultShow: PropTypes.bool,
};

LearnWords.defaultProps = {
  word: {},
  answer: '',
  isResultShow: false,
};
