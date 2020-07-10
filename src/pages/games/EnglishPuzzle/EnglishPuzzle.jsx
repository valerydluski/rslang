import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Content from './Styled/Content';
import Container from './Styled/Container';
import Main from './Styled/Main';
import MenuContainer from './Styled/MenuContainer';
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
import { GAME_MAX_PAGE, GAME_NAME, SCREEN_SIZE } from '../../../config';
import screenRotateIcon from '../../../assets/img/rotate-screen.svg';
import getScreenWidth from '../../../utils/getScreenWidth';
import Image from '../../../components/UI/Image/Image';
import newRound from '../../../utils/newRound';

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
    gameMode,
  } = props;
  const [isModalOpen, toggleModal] = useState(false);
  const [isBreakpoint, changeBreakpoint] = useState(false);

  const breakpoint = 568;

  const prevWidth = getScreenWidth();

  checkStatusSession();

  const onResize = useCallback(() => {
    const width = getScreenWidth();
    if (width < breakpoint) {
      changeBreakpoint(true);
    } else {
      changeBreakpoint(false);
    }
    if (
      width > SCREEN_SIZE.tablet &&
      width <= SCREEN_SIZE.laptop &&
      prevWidth > SCREEN_SIZE.laptop
    ) {
      window.removeEventListener('resize', onResize);
      updatePage(page);
    }
    if (width > SCREEN_SIZE.laptop && prevWidth < SCREEN_SIZE.laptop) {
      window.removeEventListener('resize', onResize);
      updatePage(page);
    }
  }, [changeBreakpoint, updatePage, prevWidth, page]);

  const onOrientationChange = useCallback(() => {
    const width = getScreenWidth();
    if (width < breakpoint) {
      changeBreakpoint(true);
    } else {
      changeBreakpoint(false);
    }
  }, [changeBreakpoint]);

  const newGame = () => {
    toggleModal(false);
    let newLevel;
    let newPage;
    let obj;
    if (gameMode) {
      obj = newRound(level, page, maxPage);
      newLevel = obj.newLevel;
      newPage = obj.newPage;
      if (newLevel !== level) updateLevel(newLevel);
      if (newPage !== page) updatePage(newPage);
    } else {
      updateLevel(level);
    }
  };

  const restartGame = () => {
    toggleModal(false);
    updatePage(page);
  };

  useEffect(() => {
    if (prevWidth < breakpoint) {
      changeBreakpoint(true);
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  }, [prevWidth, onResize, onOrientationChange]);

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== gameName) {
    switchAppMode(gameName);
  }

  if (isBreakpoint) {
    return (
      <Content>
        <GoToHomePageButton />
        <Image src={screenRotateIcon} />
      </Content>
    );
  }

  return (
    <Content>
      <GoToHomePageButton />
      {isModalOpen ? (
        <ResultModal
          audioForPlay="audioExample"
          showProperties={['word', 'textExample']}
          restartGame={restartGame}
          newGame={newGame}
        />
      ) : (
        <Container>
          <MenuContainer>
            <StatusMenu
              page={page}
              level={level}
              maxPage={maxPage}
              updateLevel={updateLevel}
              updatePage={updatePage}
            />
          </MenuContainer>
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
  gameMode: PropTypes.bool.isRequired,
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
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
  updateLevel: changeEnglishPuzzleLevel,
  updatePage: changeEnglishPuzzlePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
