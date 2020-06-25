import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SpeechIcon from '../../../../components/UI/Icon/SpeechIcon';
import TextIcon from '../../../../components/UI/Icon/TextIcon';
import MusicIcon from '../../../../components/UI/Icon/MusicIcon';
import PictureIcon from '../../../../components/UI/Icon/PictureIcon';
import {
  switchAutoSpeech,
  switchTranslation,
  switchSpeech,
  switchBackground,
} from '../../../../redux/EnglishPuzzle/actions';

const Menu = styled.div`
  position: absolute;
  top: 40px;
  right: -60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TipButton = styled.button`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#7968dc' : '#cecece')};
  border-width: 0;
  margin-top: 5px;
  &:focus,
  &:active {
    outline: none;
  }
  &:first-child {
    margin-top: 0;
  }
`;

const TipsMenu = (props) => {
  const {
    autoSpeech,
    translation,
    speech,
    background,
    toggleAutoSpeech,
    toggleTranslation,
    toggleSpeech,
    toggleBackground,
  } = props;
  return (
    <Menu>
      <TipButton onClick={toggleAutoSpeech} isActive={autoSpeech}>
        <SpeechIcon />
      </TipButton>
      <TipButton onClick={toggleTranslation} isActive={translation}>
        <TextIcon />
      </TipButton>
      <TipButton onClick={toggleSpeech} isActive={speech}>
        <MusicIcon />
      </TipButton>
      <TipButton onClick={toggleBackground} isActive={background}>
        <PictureIcon />
      </TipButton>
    </Menu>
  );
};

TipsMenu.propTypes = {
  autoSpeech: PropTypes.bool.isRequired,
  translation: PropTypes.bool.isRequired,
  speech: PropTypes.bool.isRequired,
  background: PropTypes.bool.isRequired,
  toggleAutoSpeech: PropTypes.func.isRequired,
  toggleTranslation: PropTypes.func.isRequired,
  toggleSpeech: PropTypes.func.isRequired,
  toggleBackground: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    background: state.englishPuzzle.background,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAutoSpeech: () => dispatch(switchAutoSpeech()),
    toggleTranslation: () => dispatch(switchTranslation()),
    toggleSpeech: () => dispatch(switchSpeech()),
    toggleBackground: () => dispatch(switchBackground()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TipsMenu);
