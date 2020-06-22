import React, {Component} from 'react';
import styled from 'styled-components';
// import {connect} from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle';
import getStringWidth from '../../../utils/getStringWidth';

const Container = styled.div`
  margin-top: 10px;
`;

const Playfield = styled.div`
  width: 560px;
  height: 560px;
  background: #C4C4C4;
`;

const PlayfieldRow = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  display: flex;
  box-sizing: border-box;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'none')}
`;

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 560px;
  height: 56px;
  padding-left: 20px;
  box-sizing: border-box;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'none')}
  & > span:nth-child(n):not(:first-child) {
    margin: 0 10px;
  }
`;

export default class Game extends Component {

  state = {
    data: {
      'The_1': {id: 'The_1', word: 'The', order: 1},
      'woman_2': {id: 'woman_2', word: 'woman', order: 2},
      'like_3': {id: 'like_3', word: 'like', order: 3},
      'to_4': {id: 'to_4', word: 'to', order: 4},
      'ride_5': {id: 'ride_5', word: 'ride', order: 5},
      'a_6': {id: 'a_6', word: 'a', order: 6},
      'bicycle_7': {id: 'bicycle_7', word: 'bicycle', order: 7}
    },
    source: ['like_3', 'woman_2', 'to_4', 'ride_5', 'The_1', 'a_6', 'bicycle_7'],
    results: []
  }

  onDragEnd = result => {
    console.log(result);
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceState = this.state.source.concat();
    const resultsState = this.state.results.concat();

    if (destination.droppableId === "row" && source.droppableId === "source") {
      const item = sourceState.splice(source.index, 1);
      resultsState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === "row" && source.droppableId === "row") {
      const item = resultsState.splice(source.index, 1);
      resultsState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === "source" && source.droppableId === "source") {
      const item = sourceState.splice(source.index, 1);
      sourceState.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === "source" && source.droppableId === "row") {
      const item = resultsState.splice(source.index, 1);
      sourceState.splice(destination.index, 0, ...item);
    }

    this.setState({
      source: sourceState,
      results: resultsState
    })
  }

  transferToSource = event => {
    const id = event.target.dataset.rbdDraggableId;
    const results = this.state.results;
    const source = this.state.source;
    const index = results.findIndex(item => item === id);

    results.splice(index, 1);
    source.push(id);

    this.setState({
      source, results
    })
  }

  transferToPlayfield = event => {
    const id = event.target.dataset.rbdDraggableId;
    const results = this.state.results;
    const source = this.state.source;
    const index = source.findIndex(item => item === id);

    source.splice(index, 1);
    results.push(id);

    this.setState({
      source,
      results
    })
  }

  render() {
    return (
      <Container>
        <DragDropContext
          onDragEnd={this.onDragEnd}
        >
          <Playfield>
            <Droppable
              droppableId="row"
              direction="horizontal"
            >
              {(provided, snapshot) => (
                <PlayfieldRow
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.state.results.map((item, index) => {
                    const data = this.state.data[item];
                    return (
                    <Puzzle
                      id={data.id}
                      key={data.order}
                      index={index}
                      onClick={this.transferToSource}
                    >
                      {data.word}
                    </Puzzle>
                    )
                  })}
                  { provided.placeholder }
                </PlayfieldRow>
              )}
            </Droppable>
          </Playfield>
          <Droppable
            droppableId="source"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <Source
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.state.source.map((item, index) => {
                  const data = this.state.data[item];
                  console.log(getStringWidth(data.word));
                  return (
                  <Puzzle
                    id={data.id}
                    key={data.order}
                    index={index}
                    onClick={this.transferToPlayfield}
                  >
                    {data.word}
                  </Puzzle>
                  )
                })}
                {provided.placeholder}
              </Source>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    )
  }
}
