import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import {
  changeMakeSentenceLevel,
  changeMakeSentencePage,
} from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE, GAME_NAME } from '../../../config';
import MakeSentenceGame from '../../../containers/MakeSentence/MakeSentenceGame';
import StyledContainer from './Styled/StyledContainer';
import StyledGameContainer from './Styled/StyledGameContainer';
import getScreenWidth from '../../../utils/getScreenWidth';
import Image from '../../../components/UI/Image/Image';
import screenRotateIcon from '../../../assets/img/rotate-screen.svg';
import GameModeToggle from '../../../containers/GameModeToggle/GameModeToggle';

const MakeSentence = ({
  wordsCollection,
  updateLevel,
  updatePage,
  page,
  level,
  maxPage,
  gameName,
}) => {
  const [words, changeWords] = useState(wordsCollection);

  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  const [isBreakpoint, changeBreakpoint] = useState(false);

  const breakpoint = 568;

  const onResize = useCallback(() => {
    changeBreakpoint(getScreenWidth() < breakpoint);
  }, [changeBreakpoint]);

  const onOrientationChange = useCallback(() => {
    changeBreakpoint(getScreenWidth() < breakpoint);
  }, [changeBreakpoint]);

  useEffect(() => {
    if (getScreenWidth() < breakpoint) {
      changeBreakpoint(true);
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  }, [onResize, onOrientationChange]);

  return (
    <StyledContainer>
      <GoToHomePageButton />
      {isBreakpoint ? (
        <Image src={screenRotateIcon} />
      ) : (
        <>
          <GameModeToggle gameName={gameName} />
          <StatusMenu
            page={page}
            level={level}
            maxPage={maxPage}
            updateLevel={updateLevel}
            updatePage={updatePage}
          />
          <StyledGameContainer>
            <MakeSentenceGame
              key={`level-${level}/page-${page}`}
              wordsCollection={words}
              maxPage={maxPage}
              page={page}
              level={level}
            />
          </StyledGameContainer>
        </>
      )}
    </StyledContainer>
  );
};

MakeSentence.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
  gameName: PropTypes.string,
};

MakeSentence.defaultProps = {
  wordsCollection: [],
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
  gameName: GAME_NAME.makeSentence,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    level: state.changeRound.MakeSentenceLevel,
    page: state.changeRound.MakeSentencePage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  updateLevel: changeMakeSentenceLevel,
  updatePage: changeMakeSentencePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSentence);
