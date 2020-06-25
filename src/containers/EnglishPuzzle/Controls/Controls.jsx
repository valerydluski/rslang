import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePageStatus, updatePage, pickRow } from '../../../redux/EnglishPuzzle/actions';

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
    const { isRowCorrect, isPageFill, row, page, updateRow, updatePage, pickRow } = this.props;
    if (isPageFill) {
      updatePage(page + 1);
    } else if (isRowCorrect) {
      updateRow(row + 1);
    } else {
      pickRow();
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
  page: PropTypes.number.isRequired,
  updateRow: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  pickRow: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isRowCorrect: state.englishPuzzle.isRowCorrect,
    isRowFill: state.englishPuzzle.isRowFill,
    isPageFill: state.englishPuzzle.isPageFill,
    row: state.englishPuzzle.row,
    page: state.englishPuzzle.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateRow: (row) => dispatch(updatePageStatus(row)),
    updatePage: (page) => dispatch(updatePage(page)),
    pickRow: () => dispatch(pickRow()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
