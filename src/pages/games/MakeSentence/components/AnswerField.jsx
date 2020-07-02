import React from 'react';
import PropTypes from 'prop-types';
import AnswerFieldStyled from '../Styled/AnswerFieldStyled';
import TranslationPart from './TranslationPart';

const AnswerField = ({ answerParts }) => {
  const parts = answerParts.map((part, i) => {
    const key = `${part}${i}`;
    return <TranslationPart key={key} part={part} />;
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
// import React from 'react';
// import PropTypes from 'prop-types';
// import GameFieldsContainerStyled from '../Styled/GameFieldsContainerStyled';

// const GameFieldsContainer = ({ translationParts }) => {
//   const [parts, changeParts] = useState(translationParts);
//   const partsElements = parts.map((part, i) => {
//     const key = `${part}${i}`;
//     return <TranslationPart key={key} part={part} />;
//   });
//   return <GameFieldsContainerStyled>{partsElements}</GameFieldsContainerStyled>;
// };

// GameFieldsContainer.propTypes = {
//   translationParts: PropTypes.instanceOf(Array),
// };

// GameFieldsContainer.defaultProps = {
//   translationParts: [],
// };

// export default GameFieldsContainer;
