import React from 'react';
import PropTypes from 'prop-types';
import AnswerFieldStyled from './Styled/AnswerFieldStyled';
import TranslationPart from './TranslationPart';

const AnswerField = ({ answerParts }) => {
  const parts = answerParts.map((part, i) => {
    const key = `${part}${i}`;
    return <TranslationPart key={key} part={part} index={i} type="answer" />;
  });
  return <AnswerFieldStyled>{parts}</AnswerFieldStyled>;
};

AnswerField.propTypes = {
  answerParts: PropTypes.instanceOf(Array),
};

AnswerField.defaultProps = {
  answerParts: [],
};

export default AnswerField;
