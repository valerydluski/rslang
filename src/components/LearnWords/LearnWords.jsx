import React from 'react';
import PropTypes from 'prop-types';
import LearnWordsContainer from './styled/LearnWordsContainer';
import LearnWordCardContainer from './styled/LearnWordCardContainer';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ReduxLearnWordsForm from '../../containers/LearnWords/LearnWordsForm';

export default function LearnWords(props) {
  const { onSubmit, word, isCorrect, settings, isTranslationShow, isRightAnswerShow } = props;
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
        />
      </LearnWordCardContainer>
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
};

LearnWords.defaultProps = {
  word: {},
};
