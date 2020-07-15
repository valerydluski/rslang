import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import AnswerFieldStyled from './Styled/AnswerFieldStyled';
import TranslationPart from './TranslationPart';

const AnswerField = ({
  answerParts,
  isDragging,
  wordsWidth,
  isCheckShow,
  sentenceTranslationParts,
  toggleShowCheck,
}) => {
  const parts = answerParts.map((part, i) => {
    const key = `${part}${i}`;
    let partClass = '';
    if (isCheckShow) {
      const isCorrect = part === sentenceTranslationParts[i];
      partClass = isCorrect ? 'correct' : 'wrong';
    }
    return (
      <TranslationPart
        key={key}
        id={key}
        part={part}
        index={i}
        type="answer"
        isDragging={isDragging}
        width={wordsWidth[part]}
        isCheckShow={isCheckShow}
        partClass={isCheckShow ? partClass : ''}
      />
    );
  });
  if (!isDragging) {
    return <AnswerFieldStyled>{parts}</AnswerFieldStyled>;
  }
  return (
    <Droppable droppableId="target" direction="horizontal">
      {(provided, snapshot) => (
        <AnswerFieldStyled
          ref={provided.innerRef}
          onClick={() => toggleShowCheck(false)}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
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
  wordsWidth: PropTypes.shape(),
  isCheckShow: PropTypes.bool,
  sentenceTranslationParts: PropTypes.instanceOf(Array),
};

AnswerField.defaultProps = {
  answerParts: [],
  isDragging: false,
  wordsWidth: {},
  isCheckShow: false,
  sentenceTranslationParts: [],
};

export default AnswerField;
