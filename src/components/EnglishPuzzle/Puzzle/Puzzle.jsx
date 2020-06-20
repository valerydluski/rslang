import React, {Component} from 'react'
import styled from 'styled-components';

const StyledPuzzle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 50px;
  clip-path: polygon(
    calc(100% - 20px) 0%,
    100% 50%,
    calc(100% - 20px) 100%,
    0% 100%,
    20px 50%,
    0% 0%
  );
  background-size: 602px 340px;
  background-color: red;
  color: #000000;
  position: relative;
  padding: 0 20px;

  &::after {
    content: "";
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
  }

  &.drag {

  }

  &.active {
    cursor: pointer;
  }

  &.playfield {
    margin-left: -20px;
    &:first-child {
      margin-left: 0;
    }
  }

  &.source {
    padding: 0;
  }

  &.correct {
    &::after {
      display: block;
      background-color:
    }
  }
`;

class Puzzle extends Component {
  render() {
    return (
      <StyledPuzzle className="playfield">
        { this.props.children }
      </StyledPuzzle>
    )
  }
}

export default Puzzle;
