import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from '../../../UI/Icon/Icon';
import speechIcon from '../../../UI/Icon/speechIco.svg';
import translationIcon from '../../../UI/Icon/translationIco.svg';
import musicIcon from '../../../UI/Icon/musicIco.svg';
import pictureIcon from '../../../UI/Icon/pictureIco.svg';
import textIcon from '../../../UI/Icon/textIco.svg';
import Button from '../../../UI/Button/Styled/StyledPuzzleRoundButton';
import RedButton from '../../../UI/Button/Styled/StyledPuzzleRoundRedButton';

import Menu from './Styled/Menu';
import {
  switchAutoSpeech,
  switchTranslation,
  switchSpeech,
  switchBackground,
} from '../../../../redux/EnglishPuzzle/actions';

const TipsMenu = (props) => {
  const {
    autoSpeech,
    translation,
    speech,
    background,
    isPageFill,
    toggleAutoSpeech,
    toggleTranslation,
    toggleSpeech,
    toggleBackground,
    toggleModal,
  } = props;
  return (
    <Menu>
      <Button onClick={toggleAutoSpeech} isActive={autoSpeech}>
        <Icon src={speechIcon} />
      </Button>
      <Button onClick={toggleTranslation} isActive={translation}>
        <Icon src={translationIcon} />
      </Button>
      <Button onClick={toggleSpeech} isActive={speech}>
        <Icon src={musicIcon} />
      </Button>
      <Button onClick={toggleBackground} isActive={background}>
        <Icon src={pictureIcon} />
      </Button>
      <RedButton
        onClick={
          isPageFill
            ? () => {
                toggleModal(true);
              }
            : null
        }
        isActive={isPageFill}
      >
        <Icon src={textIcon} />
      </RedButton>
    </Menu>
  );
};

TipsMenu.propTypes = {
  autoSpeech: PropTypes.bool.isRequired,
  translation: PropTypes.bool.isRequired,
  speech: PropTypes.bool.isRequired,
  background: PropTypes.bool.isRequired,
  isPageFill: PropTypes.bool.isRequired,
  toggleAutoSpeech: PropTypes.func.isRequired,
  toggleTranslation: PropTypes.func.isRequired,
  toggleSpeech: PropTypes.func.isRequired,
  toggleBackground: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    background: state.englishPuzzle.background,
    isPageFill: state.englishPuzzle.isPageFill,
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
