import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { ENGLISH_PUZZLE_CONSTANTS, LINK_FOR_ENGLISH_PUZZLE_IMAGE } from '../../../config';
import {
  transferToSource,
  transferToPlayfield,
  onDragEnd,
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
  position: relative;
  z-index: 20;
  background-image: ${(props) => (props.url ? `url('${props.url}')` : 'none')};
  background-size: 560px 560px;
`;

const PlayfieldRow = styled.div`
  width: 100%;
  height: 56px;
  padding-left: ${ENGLISH_PUZZLE_CONSTANTS.GEOMETRY.PUZZLE_PADDING}px;
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
  width: 560px;
  height: 56px;
  justify-content: ${(props) => (props.isInCenter ? 'center' : 'flex-start')};
  padding-left: ${ENGLISH_PUZZLE_CONSTANTS.GEOMETRY.PUZZLE_PADDING}px;
  box-sizing: border-box;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'none')};
`;

class Game extends Component {
  renderActivePuzzle = (item, index, array) => {
    const {
      data,
      row,
      results,
      playfieldPuzzleClick,
      sourcePuzzleClick,
      pic,
      background,
      isRowCorrect,
      isRowFill,
    } = this.props;
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
        isCorrect={index === itemData.order - 1}
        word={itemData.word}
        url={
          background || (!background && isRowCorrect)
            ? `${LINK_FOR_ENGLISH_PUZZLE_IMAGE}${pic.cutSrc}`
            : `${LINK_FOR_ENGLISH_PUZZLE_IMAGE}PuzzleBg.jpg`
        }
        isRowFill={isRowFill}
      />
    );
  };

  renderStaticPuzzle = (itemData, index) => {
    const { pic } = this.props;
    return (
      <Puzzle
        key={itemData.order}
        width={itemData.width}
        bgXOffset={itemData.bgXOffset}
        bgYOffset={itemData.bgYOffset}
        word={itemData.word}
        isFirst={itemData.order === 1}
        isLast={itemData.order === index + 1}
        url={`${LINK_FOR_ENGLISH_PUZZLE_IMAGE}${pic.cutSrc}`}
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
    const { row, data, isPageFill, pic } = this.props;
    const playfield = isPageFill ? (
      <Playfield url={`${LINK_FOR_ENGLISH_PUZZLE_IMAGE}${pic.cutSrc}`} />
    ) : (
      <Playfield>
        {data.slice(0, row).map(this.renderStaticRow)}
        {this.renderActiveRow()}
      </Playfield>
    );
    return playfield;
  }

  renderSource() {
    const { source, isPageFill, pic } = this.props;
    const content = isPageFill ? (
      <Source isInCenter={isPageFill}>
        <span>
          {pic.name} - {pic.author}, {pic.year}
        </span>
      </Source>
    ) : (
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
    return content;
  }

  render() {
    const { onDragPuzzle, isWordsLoading } = this.props;
    if (isWordsLoading) return null;
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
  isRowCorrect: PropTypes.bool.isRequired,
  isRowFill: PropTypes.bool.isRequired,
  isPageFill: PropTypes.bool.isRequired,
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  background: PropTypes.bool.isRequired,
  playfieldPuzzleClick: PropTypes.func.isRequired,
  sourcePuzzleClick: PropTypes.func.isRequired,
  onDragPuzzle: PropTypes.func.isRequired,
  pic: PropTypes.exact({
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    cutSrc: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  isWordsLoading: PropTypes.bool,
};

Game.defaultProps = {
  isWordsLoading: false,
};

function mapStateToProps(state) {
  return {
    data: state.englishPuzzle.data,
    source: state.englishPuzzle.source,
    results: state.englishPuzzle.results,
    row: state.englishPuzzle.row,
    isRowCorrect: state.englishPuzzle.isRowCorrect,
    isRowFill: state.englishPuzzle.isRowFill,
    isPageFill: state.englishPuzzle.isPageFill,
    background: state.englishPuzzle.background,
    pic: state.englishPuzzle.pic,
    isWordsLoading: state.loader.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    playfieldPuzzleClick: (event) => dispatch(transferToSource(event)),
    sourcePuzzleClick: (event) => dispatch(transferToPlayfield(event)),
    onDragPuzzle: (result) => dispatch(onDragEnd(result)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
