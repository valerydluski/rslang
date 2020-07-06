import React, { useState, useEffect } from 'react';
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
  const [isBreakpoint, changeBreakpoint] = useState(false);
  const [prevWidth, changePrevWidth] = useState(getScreenWidth());
  checkStatusSession();

  const onResize = () => {
    const curWidth = getScreenWidth();
    if (curWidth <= SCREEN_SIZE.tablet) {
      changeBreakpoint(true);
    } else {
      changeBreakpoint(false);
    }
    if (
      curWidth <= SCREEN_SIZE.laptop &&
      curWidth > SCREEN_SIZE.tablet &&
      prevWidth > SCREEN_SIZE.laptop
    ) {
      // updatePage(page);
      console.log('больше 768 меньше 1024');
      console.log(curWidth, prevWidth);
    } else if (curWidth > SCREEN_SIZE.laptop && prevWidth <= SCREEN_SIZE.laptop) {
      // updatePage(page);
      console.log('больше 1024');
      console.log(curWidth, prevWidth);
    }
    changePrevWidth(curWidth);
  };

  useEffect(() => {
    if (prevWidth < SCREEN_SIZE.tablet) {
      changeBreakpoint(true);
    }
    window.addEventListener('resize', onResize);
  });

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
        <ResultModal showProperties={['textExample']} />
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
