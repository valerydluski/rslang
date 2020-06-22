import React, {Component} from 'react'
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const StyledPuzzle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: ${props => props.width}px;
  box-sizing: border-box;
  flex-shrink: 0;
  clip-path: polygon(
    calc(100% - 20px) 0%,
    100% 50%,
    calc(100% - 20px) 100%,
    0% 100%,
    20px 50%,
    0% 0%
  );
  background-size: 602px 340px;
  background-position: ${props => -props.bgXOffset}px ${props => -props.bgYOffset}px;
  background-color: red;
  color: #000000;
  position: relative;
  padding: 0 20px;
  margin-left: -20px;

  &::after {
    content: "";
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
  }
`;

class Puzzle extends Component {
  renderStatic() {
    return (
      <StyledPuzzle
        width={this.props.width}
        bgXOffset={this.props.bgXOffset}
        bgYOffset={this.props.bgYOffset}
      >
        { this.props.children }
      </StyledPuzzle>
    )
  }

  renderActive() {
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {(provided) => (
          <StyledPuzzle
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={this.props.onClick}
            width={this.props.width}
            bgXOffset={this.props.bgXOffset}
            bgYOffset={this.props.bgYOffset}
          >
            { this.props.children }
          </StyledPuzzle>
        )}
      </Draggable>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isStatic ? this.renderStatic() : this.renderActive() }
      </React.Fragment>
    )
  }
}

export default Puzzle;
