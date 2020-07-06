import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import GameContainerSpeakIT from '../../../containers/SpeakIT/GameContainerSpeakIT';
import SpeakITContainerStyled from '../../../containers/SpeakIT/Styled/StyledSpeakIT';
import { GAME_NAME } from '../../../config';
import { changeAppMode } from '../../../redux/AppMode/action';

const SpeakIT = (props) => {
  const { switchAppMode, isWordsLoading, currentAppMode, gameName } = props;

  if (isWordsLoading) return <LoadingSpinner />;
  if (currentAppMode !== gameName) {
    switchAppMode(gameName);
    return null;
  }

  return (
    <SpeakITContainerStyled>
      <div>
        <GoToHomePageButton />
      </div>

      <GameContainerSpeakIT />
    </SpeakITContainerStyled>
  );
};

SpeakIT.propTypes = {
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool.isRequired,
  currentAppMode: PropTypes.string.isRequired,
  gameName: PropTypes.string,
};

SpeakIT.defaultProps = {
  gameName: GAME_NAME.speakIT,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakIT);
