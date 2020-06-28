import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../../redux/ChangeRounds/action';
import Menu from './Styled/Menu';
import MenuItem from './Styled/MenuItem';
import Title from './Styled/Title';
import SelectContainer from './Styled/SelectContainer';
import Overlay from './Styled/Overlay';
import Select from '../../../UI/Select/Select';
import { DIRECTION_ROW } from '../../../UI/Select/Styled/constants';
import { ITEM_PAGE, ITEM_LEVEL } from './constants';
import { GAME_MAX_PAGE, GAME_MAX_LEVEL } from '../../../../config';

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

  const closeAll = () => {
    toggleLevel(false);
    togglePage(false);
  };

  return (
    <Menu>
      <MenuItem type={ITEM_LEVEL}>
        <Title>level</Title>
        <SelectContainer>
          <Select
            isOpen={isLevelOpen}
            onToggle={switchLevel}
            optionsNumber={GAME_MAX_LEVEL}
            openBtnName="Выбрать"
            onOptionClick={onLevelOptionClick}
            value={+level}
          />
        </SelectContainer>
      </MenuItem>
      <MenuItem type={ITEM_PAGE}>
        <Title>page</Title>
        <SelectContainer>
          <Select
            isOpen={isPageOpen}
            optionsNumber={maxPage}
            onToggle={switchPage}
            openBtnName="Выбрать"
            onOptionClick={onPageOptionClick}
            direction={DIRECTION_ROW}
            value={+page}
          />
        </SelectContainer>
      </MenuItem>
      {isPageOpen || isLevelOpen ? <Overlay onClick={closeAll} /> : null}
    </Menu>
  );
};

StatusMenu.propTypes = {
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
};

StatusMenu.defaultProps = {
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
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
