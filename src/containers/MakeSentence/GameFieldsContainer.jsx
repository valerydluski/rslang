import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GameFieldsContainerStyled from './Styled/GameFieldsContainerStyled';
import AnswerField from '../../components/MakeSentence/AnswerField';
import OptionsField from '../../components/MakeSentence/OptionsField';
// import shuffleArray from '../../utils/shuffleArray';

const GameFieldsContainer = ({
  sentenceTranslationParts,
  toggleWordStatus,
  sentenceTranslation,
}) => {
  const [optionParts, changeOptionParts] = useState(sentenceTranslationParts);
  const [answerParts, changeAnswerParts] = useState([]);

  console.log(sentenceTranslationParts);

  const checkAnswer = () => {
    const result = answerParts.join(' ') === sentenceTranslation;
    console.log(result);
    if (result) {
      // changeOptionParts([]);
      // changeAnswerParts([]);
      toggleWordStatus(true);
    }
  };

  useEffect(() => {
    if (optionParts.length === 0) {
      checkAnswer();
    }
  });

  // const [value, setValue] = useState(propName);
  // This will launch only if propName value has chaged.
  useEffect(() => {
    changeOptionParts(optionParts);
    changeAnswerParts(answerParts);
    console.log('zzz', optionParts, answerParts, sentenceTranslationParts);
  }, [sentenceTranslationParts]);

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

  const key = sentenceTranslationParts.join('');
  console.log(key);
  const clickFieldHandler = (e) => {
    if (e.target.hasAttribute('data-type')) {
      swapPart(e.target.dataset.type, e.target.dataset.index);
    }
  };
  return (
    <GameFieldsContainerStyled onClick={clickFieldHandler} key={key}>
      <AnswerField answerParts={answerParts} key={`${sentenceTranslationParts.join()}ans`} />
      <OptionsField optionsParts={optionParts} key={`${sentenceTranslationParts.join()}opt`} />
    </GameFieldsContainerStyled>
  );
};

GameFieldsContainer.propTypes = {
  sentenceTranslationParts: PropTypes.instanceOf(Array).isRequired,
  toggleWordStatus: PropTypes.func,
};

GameFieldsContainer.defaultProps = {
  toggleWordStatus: () => {},
};

export default GameFieldsContainer;
