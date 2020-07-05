import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Content from './Styled/Content';
import Container from './Styled/Container';
import Main from './Styled/Main';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import TipsMenu from '../../../components/EnglishPuzzle/Menu/TipsMenu/TipsMenu';
import Game from '../../../containers/EnglishPuzzle/Game/Game';
import Info from '../../../components/EnglishPuzzle/Info/Info';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import { changeAppMode } from '../../../redux/AppMode/action';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
import ResultModal from '../../../containers/Modal/ResultModal';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE, GAME_NAME } from '../../../config';

const EnglishPuzzle = (props) => {
  const {
    isWordsLoading,
    currentAppMode,
    switchAppMode,
    page,
    level,
    maxPage,
    updatePage,
    updateLevel,
    gameName,
  } = props;
  const [isModalOpen, toggleModal] = useState(false);
  checkStatusSession();

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== gameName) {
    switchAppMode(gameName);
  }

  return (
    <Content>
      <GoToHomePageButton />
      {isModalOpen ? (
        <ResultModal showProperties={['textExample']} />
      ) : (
        <Container>
          <StatusMenu
            page={page}
            level={level}
            maxPage={maxPage}
            updateLevel={updateLevel}
            updatePage={updatePage}
          />
          <Main>
            <Game />
            <TipsMenu toggleModal={toggleModal} />
          </Main>
          <Info />
        </Container>
      )}
    </Content>
  );
};

EnglishPuzzle.propTypes = {
  level: PropTypes.string,
  page: PropTypes.string,
  isWordsLoading: PropTypes.bool,
  maxPage: PropTypes.number,
  currentAppMode: PropTypes.string.isRequired,
  switchAppMode: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
  gameName: PropTypes.string,
};

EnglishPuzzle.defaultProps = {
  isWordsLoading: false,
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.englishPuzzle,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
    level: state.changeRound.EnglishPuzzleLevel,
    page: state.changeRound.EnglishPuzzlePage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
  updateLevel: changeEnglishPuzzleLevel,
  updatePage: changeEnglishPuzzlePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
