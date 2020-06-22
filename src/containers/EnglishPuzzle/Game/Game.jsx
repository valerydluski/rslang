import React, {Component} from 'react';
import styled from 'styled-components';
// import {connect} from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle'

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
`;

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 560px;
  height: 56px;
  padding-left: 20px;
`;

export default class Game extends Component {

  state = {
    source: [
      {
        word: 'like',
        order: 3,
      },
      {
        word: 'woman',
        order: 2
      },
      {
        word: 'The',
        order: 1,
      },
      {
        word: 'to',
        order: 4
      },
      {
        word: 'ride',
        order: 5
      },
      {
        word: 'a',
        order: 6
      },
      {
        word: 'bysicle',
        order: 7
      }
    ],
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
      console.log(item);
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

    console.log(this.state);
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
              {(provided) => (
                <PlayfieldRow
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {this.state.results.map((item, index) => (
                    <Puzzle id={item.word} key={item.order} index={index}>{item.word}</Puzzle>
                  ))}
                  { provided.placeholder }
                </PlayfieldRow>
              )}
            </Droppable>
          </Playfield>
          <Droppable
            droppableId="source"
            direction="horizontal"
          >
            {(provided) => (
              <Source
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.state.source.map((item, index) => (
                  <Puzzle id={item.word} key={item.order} index={index}>{item.word}</Puzzle>
                ))}
                {provided.placeholder}
              </Source>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    )
  }
}
