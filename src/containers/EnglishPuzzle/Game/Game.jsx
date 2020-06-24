import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ENGLISH_PUZZLE_CONSTANTS } from '../../../config';
import {
  transferToSource,
  transferToPlayfield,
  onDragEnd,
  calculatePuzzlesData,
  updateSource,
} from '../../../redux/EnglishPuzzle/actions';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle';

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Playfield = styled.div`
  width: 560px;
  height: 560px;
  background: #c4c4c4;
  box-shadow: inset 0 0 0 5px #000000;
  position: relative;
  z-index: 20;
`;

const PlayfieldRow = styled.div`
  width: 100%;
  height: 56px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'none')};
  position: relative;
  z-index: 10;
`;

const Source = styled.div`
  display: flex;
  margin-top: 30px;
  width: 680px;
  height: 56px;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'none')};
  & > span:not(:last-child) {
    margin-right: 20px;
  }
`;

class Game extends Component {
  componentDidMount() {
    const { calcPuzzlesData, updateSrc } = this.props;
    calcPuzzlesData();
    updateSrc();
  }

  renderActivePuzzle = (item, index, array) => {
    const { data, row, results, playfieldPuzzleClick, sourcePuzzleClick } = this.props;
    const itemData = data[row][item];
    return (
      <Puzzle
        key={itemData.order}
        isStatic={false}
        id={itemData.id}
        index={index}
        width={itemData.width}
        bgXOffset={itemData.bgXOffset}
        bgYOffset={itemData.bgYOffset}
        onClick={array === results ? playfieldPuzzleClick : sourcePuzzleClick}
        isFirst={itemData.order === 1}
        isLast={itemData.order === Object.keys(data[row]).length}
        word={itemData.word}
        // TODO add url
        // TODO add bgTip
      />
    );
  };

  renderStaticPuzzle = (itemData, index) => {
    return (
      <Puzzle
        key={itemData.order}
        width={itemData.width}
        bgXOffset={itemData.bgXOffset}
        bgYOffset={itemData.bgYOffset}
        word={itemData.word}
        isFirst={itemData.order === 1}
        isLast={itemData.order === index + 1}

        // TODO add url
      />
    );
  };

  renderStaticRow = (item, row) => {
    const keys = Object.keys(item);
    return (
      <PlayfieldRow key={row}>
        {keys.map((key, index) => this.renderStaticPuzzle(item[key], index))}
      </PlayfieldRow>
    );
  };

  renderActiveRow = () => {
    const { results, row } = this.props;
    return (
      <Droppable droppableId={ENGLISH_PUZZLE_CONSTANTS.TARGET_ID} direction="horizontal">
        {(provided, snapshot) => (
          <PlayfieldRow
            key={row}
            ref={provided.innerRef}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {results.map(this.renderActivePuzzle)}
            {provided.placeholder}
          </PlayfieldRow>
        )}
      </Droppable>
    );
  };

  renderPlayfield() {
    const { row, data } = this.props;
    return (
      <Playfield>
        {data.slice(0, row).map(this.renderStaticRow)}
        {this.renderActiveRow()}
      </Playfield>
    );
  }

  renderSource() {
    const { source } = this.props;
    return (
      <Droppable droppableId={ENGLISH_PUZZLE_CONSTANTS.SOURCE_ID} direction="horizontal">
        {(provided, snapshot) => (
          <Source
            ref={provided.innerRef}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {source.map(this.renderActivePuzzle)}
            {provided.placeholder}
          </Source>
        )}
      </Droppable>
    );
  }

  render() {
    const { onDragPuzzle } = this.props;
    return (
      <Container>
        <DragDropContext onDragEnd={onDragPuzzle}>
          {this.renderPlayfield()}
          {this.renderSource()}
        </DragDropContext>
      </Container>
    );
  }
}

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  row: PropTypes.number.isRequired,
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoSpeech: PropTypes.bool.isRequired,
  translation: PropTypes.bool.isRequired,
  speech: PropTypes.bool.isRequired,
  background: PropTypes.bool.isRequired,
  playfieldPuzzleClick: PropTypes.func.isRequired,
  sourcePuzzleClick: PropTypes.func.isRequired,
  onDragPuzzle: PropTypes.func.isRequired,
  calcPuzzlesData: PropTypes.func.isRequired,
  updateSrc: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.englishPuzzle.data,
    source: state.englishPuzzle.source,
    results: state.englishPuzzle.results,
    row: state.englishPuzzle.row,
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    background: state.englishPuzzle.background,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playfieldPuzzleClick: (event) => dispatch(transferToSource(event)),
    sourcePuzzleClick: (event) => dispatch(transferToPlayfield(event)),
    onDragPuzzle: (result) => dispatch(onDragEnd(result)),
    calcPuzzlesData: () => dispatch(calculatePuzzlesData()),
    updateSrc: () => dispatch(updateSource()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
