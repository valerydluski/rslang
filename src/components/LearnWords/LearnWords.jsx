import React from 'react';
import LearnWordsContainer from './styled/LearnWordsContainer';
import LearnWordCardContainer from './styled/LearnWordCardContainer';
import StyledRoundButton from '../UI/Button/Styled/StyledRoundButton';
import GoHomePageButton from '../../containers/Buttons/GoHomePageButton/GoHomePageButton';

export default function LearnWords() {
  return (
    <LearnWordsContainer>
      <GoHomePageButton />
      <LearnWordCardContainer>
        <p>She is a nice</p>
        <input />
        <hr />
        <p>Она хороший человек.</p>
        <StyledRoundButton>Next</StyledRoundButton>
      </LearnWordCardContainer>
    </LearnWordsContainer>
  );
}
