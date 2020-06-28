import React from 'react';
import PropTypes from 'prop-types';
import LearnWordsContainer from './styled/LearnWordsContainer';
import LearnWordCardContainer from './styled/LearnWordCardContainer';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ReduxLearnWordsForm from './LearnWordsForm';

export default function LearnWords(props) {
  const { onSubmit, word, isCorrect } = props;
  return (
    <LearnWordsContainer>
      <GoHomePageButton />
      <LearnWordCardContainer>
        <ReduxLearnWordsForm
          onSubmit={onSubmit}
          word={word}
          isCorrect={isCorrect}
          autocomplete="off"
        />
      </LearnWordCardContainer>
    </LearnWordsContainer>
  );
}

LearnWords.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  word: PropTypes.shape({}),
};

LearnWords.defaultProps = {
  word: {},
};
