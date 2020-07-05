import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameFieldsContainerStyled from './Styled/GameFieldsContainerStyled';
import AnswerField from '../../components/MakeSentence/AnswerField';
import OptionsField from '../../components/MakeSentence/OptionsField';
import shuffleArray from '../../utils/shuffleArray';

const GameFieldsContainer = ({ toggleWordStatus, sentenceTranslation }) => {
  const [optionParts, changeOptionParts] = useState(shuffleArray(sentenceTranslation.split(' ')));
  const [answerParts, changeAnswerParts] = useState([]);

  const checkAnswer = () => {
    const result = answerParts.join(' ') === sentenceTranslation;
    if (result) {
      toggleWordStatus(true);
    }
  };

  useEffect(() => {
    if (optionParts.length === 0) {
      checkAnswer();
    }
  });

  useEffect(() => {}, [sentenceTranslation]);

  const swapPart = (type, index) => {
    const isOption = type === 'option';
    const options = [...optionParts];
    const answers = [...answerParts];
    const replacingPart = isOption ? options.splice(index, 1)[0] : answers.splice(index, 1)[0];
    if (isOption) answers.push(replacingPart);
    else options.push(replacingPart);
    changeOptionParts(options);
    changeAnswerParts(answers);
  };

  const clickFieldHandler = (e) => {
    if (e.target.hasAttribute('data-type')) {
      swapPart(e.target.dataset.type, e.target.dataset.index);
    }
  };

  return (
    <GameFieldsContainerStyled onClick={clickFieldHandler}>
      <AnswerField answerParts={answerParts} />
      <OptionsField optionsParts={optionParts} />
    </GameFieldsContainerStyled>
  );
};

GameFieldsContainer.propTypes = {
  sentenceTranslation: PropTypes.string.isRequired,
  toggleWordStatus: PropTypes.func,
};

GameFieldsContainer.defaultProps = {
  toggleWordStatus: () => {},
};

export default GameFieldsContainer;
