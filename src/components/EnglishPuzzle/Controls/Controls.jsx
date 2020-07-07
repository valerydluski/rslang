import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import { pickRow, updatePageStatus, changePageStatus } from '../../../redux/EnglishPuzzle/actions';
import StyledRectangleButton from '../../UI/Button/Styled/StyledRectangleButton';
import { changeIDontKnowWords } from '../../../redux/Games/action';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../redux/ChangeRounds/action';
import { saveFullStatistic } from '../../../redux/Statistic/action';
import newRound from '../../../utils/newRound';
import { GAME_NAME } from '../../../config';
import { ROWS_IN_PAGE } from '../../../containers/EnglishPuzzle/Game/constants';

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
      saveStatistic,
      gameName,
      setPageFill,
    } = this.props;
    const { word } = words[row];
    if (isPageFill) {
      const { newLevel, newPage } = newRound(level, page, maxPage);
      if (newLevel !== level) updateLevel(newLevel);
      if (newPage !== page) updatePage(newPage);
    } else if (isRowCorrect) {
      const newRow = row + 1;
      if (newRow === ROWS_IN_PAGE) {
        setPageFill(true);
        saveStatistic({
          Level: level,
          Page: page,
          wordsCollection: words,
          wrongWordsState: wrongWords,
          gameName,
        });
      } else {
        updateRow(newRow);
      }
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
          {isRowCorrect && isRowFill ? (
            <Translate value="Buttons.next" />
          ) : (
            <Translate value="Buttons.dontKnow" />
          )}
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
  saveStatistic: PropTypes.func,
  setPageFill: PropTypes.func,
  words: PropTypes.arrayOf(PropTypes.object),
  addWrongAnswersToStore: PropTypes.func,
  wrongWords: PropTypes.arrayOf(PropTypes.string),
  gameName: PropTypes.string,
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
  saveStatistic: () => {},
  setPageFill: () => {},
  words: [],
  wrongWords: [],
  gameName: GAME_NAME.englishPuzzle,
};

function mapStateToProps(state) {
  return {
    isRowCorrect: state.englishPuzzle.isRowCorrect,
    isRowFill: state.englishPuzzle.isRowFill,
    isPageFill: state.englishPuzzle.isPageFill,
    row: state.englishPuzzle.row,
    level: state.changeRound.EnglishPuzzleLevel,
    page: state.changeRound.EnglishPuzzlePage,
    maxPage: state.maxPage.maxPage,
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
    saveStatistic: (data) => dispatch(saveFullStatistic(data)),
    setPageFill: (isPageFill) => dispatch(changePageStatus(isPageFill)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
