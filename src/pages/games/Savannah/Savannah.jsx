import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import SavannahContainerStyled from './Styled/SavannahContainerStyled';
import SavannaGameContainer from '../../../containers/Savannah/SavannahGameContainer';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { changeSavannahLevel, changeSavannahPage } from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE } from '../../../config';

const Savannah = ({ wordsCollection, page, level, maxPage, updateLevel, updatePage }) => {
  const [words, changeWords] = useState(wordsCollection);

  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  return (
    <SavannahContainerStyled>
      <GoToHomePageButton />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      <SavannaGameContainer
        key={`level-${level}:page-${page}`}
        wordsCollection={words}
        level={level}
        page={page}
      />
    </SavannahContainerStyled>
  );
};

Savannah.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

Savannah.defaultProps = {
  wordsCollection: [],
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    level: state.changeRound.SavannahLevel,
    page: state.changeRound.SavannahPage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  updateLevel: changeSavannahLevel,
  updatePage: changeSavannahPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Savannah);
