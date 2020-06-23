import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import {ENGLISH_PUZZLE_CONSTANTS} from '../../../config';
import {
  transferToSource,
  transferToPlayfield,
  onDragEnd,
  calculatePuzzlesData,
  updateSource
} from '../../../redux/EnglishPuzzle/actions';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle';

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

class Game extends Component {

  componentDidMount() {
    this.props.calculatePuzzlesData();
    this.props.updateSource();
  }

  componentWillReceiveProps() {
    this.setState({})
  }

  renderActivePuzzle = (item, index, array) => {
    const data = this.props.data[this.props.row][item];
    return (
      <Puzzle
        key={data.order}
        id={data.id}
        index={index}
        width={data.width}
        bgXOffset={data.bgXOffset}
        bgYOffset={data.bgYOffset}
        onClick={array === this.props.results ? this.props.transferToSource : this.props.transferToPlayfield}
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
        droppableId={ENGLISH_PUZZLE_CONSTANTS.TARGET_ID}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <PlayfieldRow
            key={this.props.row}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.results.map(this.renderActivePuzzle)}
            {provided.placeholder}
          </PlayfieldRow>
        )}
      </Droppable>
    )
  }

  renderPlayfield() {
    const {row, data} = this.props;
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
        droppableId={ENGLISH_PUZZLE_CONSTANTS.SOURCE_ID}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <Source
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.source.map(this.renderActivePuzzle)}
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
          onDragEnd={this.props.onDragEnd}
        >
          {this.renderPlayfield()}
          {this.renderSource()}
        </DragDropContext>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.englishPuzzle.data,
    source: state.englishPuzzle.source,
    results: state.englishPuzzle.results,
    row: state.englishPuzzle.row,
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    background: state.englishPuzzle.background
  }
}

function mapDispatchToProps(dispatch) {
  return {
    transferToSource: event => dispatch(transferToSource(event)),
    transferToPlayfield: event => dispatch(transferToPlayfield(event)),
    onDragEnd: result => dispatch(onDragEnd(result)),
    calculatePuzzlesData: () => dispatch(calculatePuzzlesData()),
    updateSource: () => dispatch(updateSource())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
