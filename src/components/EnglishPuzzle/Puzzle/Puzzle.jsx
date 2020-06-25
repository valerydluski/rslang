/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { ENGLISH_PUZZLE_CONSTANTS } from '../../../config';

const { PUZZLE_PADDING, PUZZLE_HEIGHT } = ENGLISH_PUZZLE_CONSTANTS.GEOMETRY;

const StyledPuzzle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${PUZZLE_HEIGHT}px;
  width: ${(props) => props.width}px;
  box-sizing: border-box;
  flex-shrink: 0;
  clip-path: polygon(
    calc(100% - ${(props) => (props.isLast ? 0 : PUZZLE_PADDING)}px) 0%,
    100% 50%,
    calc(100% - ${(props) => (props.isLast ? 0 : PUZZLE_PADDING)}px) 100%,
    0% 100%,
    ${(props) => (props.isFirst ? 0 : PUZZLE_PADDING)}px 50%,
    0% 0%
  );
  background-size: 560px 560px;
  background-image: url('${(props) => props.url}');
  background-position: ${(props) => -props.bgXOffset}px ${(props) => -props.bgYOffset}px;
  color: #000000;
  text-shadow: 1px 1px 2px #ffffff,
  -1px -1px 2px #ffffff;
  padding: 0 ${PUZZLE_PADDING}px;
  margin-left: -${PUZZLE_PADDING}px;
  position: relative;

  &::after {
    content: '';
    display: ${(props) => (props.isRowFill ? 'block' : 'none')};
    position: absolute;
    background-color: ${(props) => (props.isCorrect ? 'green' : 'red')};
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
  }
`;

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
  onClick: PropTypes.func,
  id: PropTypes.string,
  width: PropTypes.number,
  bgXOffset: PropTypes.number,
  bgYOffset: PropTypes.number,
  isStatic: PropTypes.bool,
  isRowFill: PropTypes.bool,
  isCorrect: PropTypes.bool,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Puzzle.defaultProps = {
  index: null,
  onClick: null,
  id: null,
  isStatic: true,
  width: 100,
  bgXOffset: 0,
  bgYOffset: 0,
  isRowFill: false,
  isCorrect: true,
};

export default Puzzle;
