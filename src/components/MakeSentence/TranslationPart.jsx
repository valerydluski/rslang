import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import TranslationPartStyled from './Styled/TranslationPartStyled';

const TranslationPart = ({ part, type, index, id, isDragging, width, partClass }) => {
  if (!isDragging) {
    return (
      <TranslationPartStyled
        data-type={type}
        className={partClass}
        data-index={index}
        width={width}
      >
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
          className={partClass}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          width={width}
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
  width: PropTypes.number,
  partClass: PropTypes.string,
};

TranslationPart.defaultProps = {
  part: '',
  type: '',
  id: '',
  partClass: '',
  isDragging: false,
  width: 0,
};

export default TranslationPart;
