import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pickRow, updatePageStatus } from '../../../redux/EnglishPuzzle/actions';
import StyledRectangleButton from '../../UI/Button/Styled/StyledRectangleButton';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../redux/ChangeRounds/action';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Controls extends Component {
  onClick = () => {
    const {
      isRowCorrect,
      isPageFill,
      row,
      updateRow,
      updatePage,
      updateLevel,
      fillRow,
      page,
      level,
      maxPage,
      words,
      addWrongAnswersToStore,
      wrongWords,
    } = this.props;
    const { word } = words[row];
    if (isPageFill) {
      if (page === maxPage) {
        updateLevel(`${+level + 1}`);
      } else {
        updatePage(`${+page + 1}`);
      }
    } else if (isRowCorrect) {
      updateRow(row + 1);
    } else {
      fillRow();
      if (wrongWords.includes(word)) return;
      addWrongAnswersToStore([...wrongWords, word]);
    }
  };

  render() {
    const { isRowCorrect, isRowFill } = this.props;
    return (
      <Container>
        <StyledRectangleButton onClick={this.onClick}>
          {isRowCorrect && isRowFill ? 'Следующий' : 'Не знаю'}
        </StyledRectangleButton>
      </Container>
    );
  }
}

Controls.propTypes = {
  maxPage: PropTypes.number,
  level: PropTypes.string,
  page: PropTypes.string,
  row: PropTypes.number,
  isRowCorrect: PropTypes.bool,
  isRowFill: PropTypes.bool,
  isPageFill: PropTypes.bool,
  updateRow: PropTypes.func,
  updatePage: PropTypes.func,
  updateLevel: PropTypes.func,
  fillRow: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object),
  addWrongAnswersToStore: PropTypes.func,
  wrongWords: PropTypes.arrayOf(PropTypes.string),
};

Controls.defaultProps = {
  level: '1',
  page: '1',
  row: 0,
  maxPage: 60,
  isRowCorrect: false,
  isRowFill: false,
  isPageFill: false,
  updateRow: () => {},
  updatePage: () => {},
  updateLevel: () => {},
  fillRow: () => {},
  addWrongAnswersToStore: () => {},
  words: [],
  wrongWords: [],
};

function mapStateToProps(state) {
  return {
    isRowCorrect: state.englishPuzzle.isRowCorrect,
    isRowFill: state.englishPuzzle.isRowFill,
    isPageFill: state.englishPuzzle.isPageFill,
    row: state.englishPuzzle.row,
    level: state.changeRound.EnglishPuzzleLevel,
    page: state.changeRound.EnglishPuzzlePage,
    maxPage: state.maxPage.maxPage.count,
    words: state.getWordsFromAPI.wordsFromAPI,
    wrongWords: state.gamesReducer.IDontKnowWords,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRow: (row) => dispatch(updatePageStatus(row)),
    updateLevel: (level) => dispatch(changeEnglishPuzzleLevel(level)),
    updatePage: (page) => dispatch(changeEnglishPuzzlePage(page)),
    fillRow: () => dispatch(pickRow()),
    addWrongAnswersToStore: (wrongWords) => dispatch(changeIDontKnowWords(wrongWords)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
