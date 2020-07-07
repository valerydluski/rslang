import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AudiocallContainer from '../../../containers/Audiocall/AudiocallContainer';
import { changeAudioCallLevel, changeAudioCallPage } from '../../../redux/ChangeRounds/action';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { GAME_MAX_PAGE } from '../../../config';
import AudiocallStyled from './Styled/AudiocallStyled';

const AudioCall = ({ wordsCollection, updateLevel, updatePage, page, level, maxPage }) => {
  const [words, changeWords] = useState(wordsCollection);
  const [backgroundOpacity, changeBackgroundOpacity] = useState(0);

  useEffect(() => {
    changeWords(wordsCollection);
    changeBackgroundOpacity(0);
  }, [wordsCollection]);

  return (
    <AudiocallStyled backgroundOpacity={backgroundOpacity}>
      <GoToHomePageButton />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      <AudiocallContainer
        key={wordsCollection.join()}
        wordsCollection={words}
        changeBackgroundOpacity={changeBackgroundOpacity}
        backgroundOpacity={backgroundOpacity}
      />
    </AudiocallStyled>
  );
};

AudioCall.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

AudioCall.defaultProps = {
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
    level: state.changeRound.AudioCallLevel,
    page: state.changeRound.AudioCallPage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  updateLevel: changeAudioCallLevel,
  updatePage: changeAudioCallPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioCall);
