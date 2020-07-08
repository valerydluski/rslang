import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import AnswerFieldStyled from './Styled/AnswerFieldStyled';
import TranslationPart from './TranslationPart';

const AnswerField = ({ answerParts, isDragging }) => {
  const parts = answerParts.map((part, i) => {
    const key = `${part}${i}`;
    return (
      <TranslationPart
        key={key}
        id={key}
        part={part}
        index={i}
        type="answer"
        isDragging={isDragging}
      />
    );
  });
  if (!isDragging) {
    return <AnswerFieldStyled>{parts}</AnswerFieldStyled>;
  }
  return (
    <Droppable droppableId="target" direction="horizontal">
      {(provided) => (
        <AnswerFieldStyled
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.droppableProps}
        >
          {parts}
          {provided.placeholder}
        </AnswerFieldStyled>
      )}
    </Droppable>
  );
};

AnswerField.propTypes = {
  answerParts: PropTypes.instanceOf(Array),
  isDragging: PropTypes.bool,
};

AnswerField.defaultProps = {
  answerParts: [],
  isDragging: false,
};

export default AnswerField;
