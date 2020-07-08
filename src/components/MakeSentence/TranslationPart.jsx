import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import TranslationPartStyled from './Styled/TranslationPartStyled';

const TranslationPart = ({ part, type, index, id, isDragging }) => {
  if (!isDragging) {
    return (
      <TranslationPartStyled data-type={type} data-index={index}>
        {part}
      </TranslationPartStyled>
    );
  }
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TranslationPartStyled
          data-type={type}
          data-index={index}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {part}
        </TranslationPartStyled>
      )}
    </Draggable>
  );
};

TranslationPart.propTypes = {
  part: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool,
};

TranslationPart.defaultProps = {
  part: '',
  type: '',
  id: '',
  isDragging: false,
};

export default TranslationPart;
