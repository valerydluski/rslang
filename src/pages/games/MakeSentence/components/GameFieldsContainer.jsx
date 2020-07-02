import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GameFieldsContainerStyled from '../Styled/GameFieldsContainerStyled';
import AnswerField from './AnswerField';
import OptionsField from './OptionsField';
import shuffleArray from '../../../../utils/shuffleArray';

const GameFieldsContainer = ({ sentenceTranslation }) => {
  const translationParts = sentenceTranslation.split(' ');
  const [optionParts, changeOptionParts] = useState(shuffleArray(translationParts));
  const [answerParts, changeAnswerParts] = useState([]);
  const addPart = () => {
    const a = 'return new el';
    return a;
  };
  const removePart = () => {
    const a = 'remove element';
    return a;
  };
  return (
    <GameFieldsContainerStyled>
      <AnswerField answerParts={answerParts} />
      <OptionsField optionsParts={optionParts} />
    </GameFieldsContainerStyled>
  );
};

GameFieldsContainer.propTypes = {
  sentenceTranslation: PropTypes.string,
};

GameFieldsContainer.defaultProps = {
  sentenceTranslation: '',
};
// GameFieldsContainer.propTypes = {
//   sentenceTranslation: PropTypes.instanceOf(Array),
// };

// GameFieldsContainer.defaultProps = {
//   sentenceTranslation: [],
// };

export default GameFieldsContainer;
