import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { LINK_FOR_ENGLISH_PUZZLE_IMAGE } from '../../../config';
import { TARGET_ID, SOURCE_ID } from './constants';
import {
  transferToSource,
  transferToPlayfield,
  onDragEnd,
} from '../../../redux/EnglishPuzzle/actions';
import Puzzle from '../../../components/EnglishPuzzle/Puzzle/Puzzle';
import Container from './Styled/Container';
import Playfield from './Styled/Playfield';
import PlayfieldRow from './Styled/PlayfieldRow';
import Source from './Styled/Source';

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
      <Droppable droppableId={TARGET_ID} direction="horizontal">
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
      <Droppable droppableId={SOURCE_ID} direction="horizontal">
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
  row: PropTypes.number,
  isWordsLoading: PropTypes.bool,
  isRowCorrect: PropTypes.bool,
  isRowFill: PropTypes.bool,
  isPageFill: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
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
};

Game.defaultProps = {
  row: 0,
  isWordsLoading: false,
  isRowCorrect: false,
  isRowFill: false,
  isPageFill: false,
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
