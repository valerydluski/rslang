/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import StyledPuzzle from './Styled/StyledPuzzle';

class Puzzle extends Component {
  renderStatic() {
    const { width, bgXOffset, bgYOffset, word, isFirst, isLast, url } = this.props;

    return (
      <StyledPuzzle
        width={width}
        bgXOffset={bgXOffset}
        bgYOffset={bgYOffset}
        isFirst={isFirst}
        isLast={isLast}
        url={url}
      >
        {word}
      </StyledPuzzle>
    );
  }

  renderActive() {
    const {
      id,
      index,
      onClick,
      width,
      bgXOffset,
      bgYOffset,
      word,
      isFirst,
      isLast,
      url,
      isRowFill,
      isCorrect,
    } = this.props;
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <StyledPuzzle
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={onClick}
            width={width}
            bgXOffset={bgXOffset}
            bgYOffset={bgYOffset}
            isFirst={isFirst}
            isLast={isLast}
            url={url}
            isRowFill={isRowFill}
            isCorrect={isCorrect}
          >
            {word}
          </StyledPuzzle>
        )}
      </Draggable>
    );
  }

  render() {
    const { isStatic } = this.props;
    return <>{isStatic ? this.renderStatic() : this.renderActive()}</>;
  }
}

Puzzle.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  width: PropTypes.number,
  bgXOffset: PropTypes.number,
  bgYOffset: PropTypes.number,
  isStatic: PropTypes.bool,
  isRowFill: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  onClick: PropTypes.func,
  word: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Puzzle.defaultProps = {
  index: null,
  id: null,
  isStatic: true,
  onClick: () => {},
  width: 100,
  bgXOffset: 0,
  bgYOffset: 0,
  isRowFill: false,
  isCorrect: true,
  isFirst: false,
  isLast: false,
};

export default Puzzle;
