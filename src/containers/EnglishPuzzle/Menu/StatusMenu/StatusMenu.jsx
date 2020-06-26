import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../../redux/ChangeRounds/action';
import Select from '../../../../components/UI/Select/Select';
import { DIRECTION_ROW } from '../../../../components/UI/Select/Styled/constants';

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
`;

const StatusMenu = (props) => {
  const { level, page, maxPage, updateLevel, updatePage } = props;

  const [isLevelOpen, toggleLevel] = useState(false);
  const [isPageOpen, togglePage] = useState(false);

  const switchLevel = () => {
    toggleLevel(!isLevelOpen);
  };

  const switchPage = () => {
    togglePage(!isPageOpen);
  };

  const onLevelOptionClick = (event) => {
    const value = event.target.innerHTML;
    updateLevel(`${value}`);
  };

  const onPageOptionClick = (event) => {
    const value = event.target.innerHTML;
    updatePage(`${value}`);
  };

  return (
    <Menu>
      <Select
        isOpen={isLevelOpen}
        onToggle={switchLevel}
        openBtnName="Выберите уровень"
        onOptionClick={onLevelOptionClick}
        value={+level}
      />
      <Select
        isOpen={isPageOpen}
        position={{ top: 0, left: 150 }}
        optionsNumber={maxPage}
        onToggle={switchPage}
        openBtnName="Выберите страницу"
        onOptionClick={onPageOptionClick}
        direction={DIRECTION_ROW}
        value={+page}
      />
    </Menu>
  );
};

StatusMenu.propTypes = {
  level: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  maxPage: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    level: state.changeRound.EnglishPuzzleLevel,
    page: state.changeRound.EnglishPuzzlePage,
    maxPage: state.maxPage.maxPage.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateLevel: (level) => dispatch(changeEnglishPuzzleLevel(level)),
    updatePage: (page) => dispatch(changeEnglishPuzzlePage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusMenu);
