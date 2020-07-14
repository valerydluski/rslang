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
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import ResultModal from '../../../containers/Modal/ResultModal';
import {
  changeEnglishPuzzleLevel,
  changeEnglishPuzzlePage,
} from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE, SCREEN_SIZE, GAME_NAME } from '../../../config';
import screenRotateIcon from '../../../assets/img/rotate-screen.svg';
import getScreenWidth from '../../../utils/getScreenWidth';
import Image from '../../../components/UI/Image/Image';
import newRound from '../../../utils/newRound';
import GameModeToggle from '../../../containers/GameModeToggle/GameModeToggle';

const EnglishPuzzle = (props) => {
  const {
    isWordsLoading,
    page,
    level,
    maxPage,
    updatePage,
    updateLevel,
    gameMode,
    gameName,
  } = props;
  const [isModalOpen, toggleModal] = useState(false);
  const [isBreakpoint, changeBreakpoint] = useState(false);

  const breakpoint = 568;

  const prevWidth = getScreenWidth();

  const onResize = useCallback(() => {
    const width = getScreenWidth();
    changeBreakpoint(width < breakpoint);
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
    changeBreakpoint(getScreenWidth() < breakpoint);
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
            <GameModeToggle gameName={gameName} />
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
          <Info newGame={newGame} />
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
  updatePage: PropTypes.func.isRequired,
  updateLevel: PropTypes.func.isRequired,
  gameMode: PropTypes.bool.isRequired,
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
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  updateLevel: changeEnglishPuzzleLevel,
  updatePage: changeEnglishPuzzlePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
