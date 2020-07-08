import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import OptionsFieldStyled from './Styled/OptionsFieldStyled';
import TranslationPart from './TranslationPart';

const OptionsField = ({ optionsParts, isDragging }) => {
  const parts = optionsParts.map((part, i) => {
    const key = `${part}${i}`;
    return (
      <TranslationPart
        key={key}
        id={key}
        part={part}
        index={i}
        type="option"
        isDragging={isDragging}
      />
    );
  });
  if (!isDragging) {
    return <OptionsFieldStyled>{parts}</OptionsFieldStyled>;
  }
  return (
    <Droppable droppableId="source" direction="horizontal">
      {(provided) => (
        <OptionsFieldStyled
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.droppableProps}
        >
          {parts}
          {provided.placeholder}
        </OptionsFieldStyled>
      )}
    </Droppable>
  );
};

OptionsField.propTypes = {
  optionsParts: PropTypes.instanceOf(Array),
  isDragging: PropTypes.bool,
};

OptionsField.defaultProps = {
  optionsParts: [],
  isDragging: false,
};

export default OptionsField;
