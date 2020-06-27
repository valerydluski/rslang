import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { pickRow, updatePageStatus } from '../../../redux/EnglishPuzzle/actions';
import StyledRectangleButton from '../../../components/UI/Button/Styled/StyledRectangleButton';
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
  isRowCorrect: PropTypes.bool.isRequired,
  isRowFill: PropTypes.bool.isRequired,
  isPageFill: PropTypes.bool.isRequired,
  updateRow: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
  fillRow: PropTypes.func.isRequired,
};

Controls.defaultProps = {
  level: '1',
  page: '1',
  row: 0,
  maxPage: 60,
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
