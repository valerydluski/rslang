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
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'none')}
`;

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 560px;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  box-sizing: border-box;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'none')}
`;

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          'The_1': {id: 'The_1', word: 'The', order: 1},
          'woman_2': {id: 'woman_2', word: 'woman', order: 2},
          'like_3': {id: 'like_3', word: 'like', order: 3},
          'to_4': {id: 'to_4', word: 'to', order: 4},
          'ride_5': {id: 'ride_5', word: 'ride', order: 5},
          'a_6': {id: 'a_6', word: 'a', order: 6},
          'bicycle_7': {id: 'bicycle_7', word: 'bicycle', order: 7}
        },
        {
          'I_1': {id: 'I_1', word: 'I', order: 1},
          'like_2': {id: 'like_2', word: 'like', order: 2},
          'to_3': {id: 'to_3', word: 'to', order: 3},
          'drive_4': {id: 'drive_4', word: 'drive', order: 4},
          'my_5': {id: 'my_5', word: 'my', order: 5},
          'car_6': {id: 'car_6', word: 'car', order: 6}
        },
        {
          'The_1': {id: 'The_1', word: 'The', order: 1},
          'woman_2': {id: 'woman_2', word: 'woman', order: 2},
          'like_3': {id: 'like_3', word: 'like', order: 3},
          'to_4': {id: 'to_4', word: 'to', order: 4},
          'ride_5': {id: 'ride_5', word: 'ride', order: 5},
          'a_6': {id: 'a_6', word: 'a', order: 6},
          'bicycle_7': {id: 'bicycle_7', word: 'bicycle', order: 7}
        }
      ],
      source: [],
      results: [],
      row: 2
    }
  }

  calculatePuzzlesData = () => {
    const data = this.state.data.concat();
    data.forEach(page => {
      const keys = Object.keys(page);

      keys.forEach(item => {
        page[item].width = getStringWidth(page[item].word);
      })

      let bgXOffset = 0;
      const bgYOffset = 0;
      const fullWidth = keys.reduce((width, item) => width + page[item].width, 0);
      const freeWidth = 560 - fullWidth;
      const extraWidth = (20 * (keys.length - 1) + freeWidth) / keys.length;

      keys.forEach(item => {
        const newWidth = page[item].width + extraWidth;
        page[item].width = page[item].width + extraWidth;
        page[item].bgXOffset = bgXOffset;
        page[item].bgYOffset = bgYOffset;
        bgXOffset += newWidth - 20;
      })
    })
    this.setState({
      data
    })
  }

  componentDidMount() {
    this.calculatePuzzlesData();
    this.generateSource();
    console.log(this.state);
  }

  generateSource() {
    const source = Object.keys(this.state.data[this.state.row])
      .sort(() => Math.random() - 0.5)
    this.setState({
      source
    })
  }


  onDragEnd = result => {
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

  renderActivePuzzle = (item, index, array) => {
    const data = this.state.data[this.state.row][item];
    const key = +`${this.state.row}${data.order}`
    return (
      <Puzzle
        key={data.order}
        id={data.id}
        index={index}
        width={data.width}
        bgXOffset={data.bgXOffset}
        bgYOffset={data.bgYOffset}
        onClick={array === this.state.results ? this.transferToSource : this.transferToPlayfield}
        // TODO add url
        // TODO add bgTip
      >
        {data.word}
      </Puzzle>
    )
  }

  renderStaticPuzzle = (item) => {
    return (
      <Puzzle
        key={item.order}
        isStatic={true}
        width={item.width}
        bgXOffset={item.bgXOffset}
        bgYOffset={item.bgYOffset}
        // TODO add url
      >
        {item.word}
      </Puzzle>
    )
  }

  renderStaticRow = (item, row) => {
    const keys = Object.keys(item);
    return (
      <PlayfieldRow
        key={row}
      >
        {keys.map(key => this.renderStaticPuzzle(item[key]))}
      </PlayfieldRow>
    )
  }

  renderActiveRow = () => {
    return (
      <Droppable
        droppableId="row"
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <PlayfieldRow
            key={this.state.row}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.state.results.map(this.renderActivePuzzle)}
            {provided.placeholder}
          </PlayfieldRow>
        )}
      </Droppable>
    )
  }

  renderPlayfield() {
    const {row, data} = this.state;
    return (
    <Playfield>
      {data.slice(0, row).map(this.renderStaticRow)}
      {this.renderActiveRow()}
    </Playfield>
    )
  }

  renderSource() {
    return(
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
            {this.state.source.map(this.renderActivePuzzle)}
            {provided.placeholder}
          </Source>
        )}
      </Droppable>
    )
  }

  render() {
    return (
      <Container>
        <DragDropContext
          onDragEnd={this.onDragEnd}
        >
          {this.renderPlayfield()}
          {this.renderSource()}
        </DragDropContext>
      </Container>
    )
  }
}

// TODO reducer
