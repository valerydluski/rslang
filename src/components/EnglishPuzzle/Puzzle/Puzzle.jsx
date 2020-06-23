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
  background-size: 602px 340px;
  background-position: ${(props) => -props.bgXOffset}px ${(props) => -props.bgYOffset}px;
  background-color: red;
  color: #000000;
  padding: 0 20px;
  margin-left: -20px;
  position: relative;

  &::after {
    content: '';
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
  }
`;

// polygon( calc(100% - 0px) 0%, 100% 50%, calc(100% - 0px) 100%, 0% 100%, 20px 50%, 0% 0% )
// end puzzle

// polygon( calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 0px 50%, 0% 0% )
// start puzzle

class Puzzle extends Component {
  renderStatic() {
    const { width, bgXOffset, bgYOffset, word, isFirst, isLast } = this.props;

    return (
      <StyledPuzzle
        width={width}
        bgXOffset={bgXOffset}
        bgYOffset={bgYOffset}
        isFirst={isFirst}
        isLast={isLast}
      >
        {word}
      </StyledPuzzle>
    );
  }

  renderActive() {
    const { id, index, onClick, width, bgXOffset, bgYOffset, word, isFirst, isLast } = this.props;
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
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  word: PropTypes.string.isRequired,
};

Puzzle.defaultProps = {
  index: null,
  onClick: null,
  id: null,
  isStatic: true,
  width: 100,
  bgXOffset: 0,
  bgYOffset: 0,
};

export default Puzzle;
