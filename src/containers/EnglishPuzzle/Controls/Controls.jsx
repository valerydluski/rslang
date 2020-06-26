import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pickRow, updatePageStatus } from '../../../redux/EnglishPuzzle/actions';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../redux/ChangeRounds/action';

const Button = styled.button`
  width: 170px;
  height: 50px;
  border-width: 0;
  background-color: #7968dc;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active,
  &:focus {
    outline: 0;
  }
`;

const Container = styled.div`
  display: flex;
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
    } = this.props;
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
    }
  };

  render() {
    const { isRowCorrect, isRowFill } = this.props;
    return (
      <Container>
        <Button onClick={this.onClick}>
          {isRowCorrect && isRowFill ? 'Следующий' : 'Не знаю'}
        </Button>
      </Container>
    );
  }
}

Controls.propTypes = {
  isRowCorrect: PropTypes.bool.isRequired,
  isRowFill: PropTypes.bool.isRequired,
  isPageFill: PropTypes.bool.isRequired,
  row: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  maxPage: PropTypes.number.isRequired,
  updateRow: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
  fillRow: PropTypes.func.isRequired,
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRow: (row) => dispatch(updatePageStatus(row)),
    updateLevel: (level) => dispatch(changeEnglishPuzzleLevel(level)),
    updatePage: (page) => dispatch(changeEnglishPuzzlePage(page)),
    fillRow: () => dispatch(pickRow()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
