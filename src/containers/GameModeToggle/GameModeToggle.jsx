import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { RuGameModeToggleStyled, EnGameModeToggleStyled } from './Styled/GameModeToggleStyled';
import { changeGameMode } from '../../redux/Games/action';
import { changeAppMode } from '../../redux/AppMode/action';

const GameModeToggle = (props) => {
  const {
    currentGameMode,
    switchGameMode,
    lang,
    gameName,
    switchAppMode,
    userWords,
    settings,
  } = props;
  const wordsForGame = settings[`${gameName}WordsPerPage`] || 20;
  const [isChecked, toggleCheck] = useState(currentGameMode);
  const switchToggle = () => {
    if (userWords.length >= +wordsForGame) {
      toggleCheck(!currentGameMode);
      switchGameMode(!currentGameMode);
      switchAppMode(gameName);
    }
  };
  if (lang === 'ru')
    return (
      <RuGameModeToggleStyled>
        <label htmlFor="mode-switcher">
          <input
            type="checkbox"
            checked={isChecked}
            data-on={I18n.t('Buttons.train')}
            data-off={I18n.t('Buttons.play')}
            onChange={() => switchToggle()}
          />
        </label>
      </RuGameModeToggleStyled>
    );

  return (
    <EnGameModeToggleStyled>
      <label htmlFor="mode-switcher">
        <input
          type="checkbox"
          checked={isChecked}
          data-on={I18n.t('Buttons.train')}
          data-off={I18n.t('Buttons.play')}
          onChange={() => switchToggle()}
        />
      </label>
    </EnGameModeToggleStyled>
  );
};

GameModeToggle.propTypes = {
  switchGameMode: PropTypes.func.isRequired,
  currentGameMode: PropTypes.bool.isRequired,
  switchAppMode: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  userWords: PropTypes.instanceOf(Array).isRequired,
  gameName: PropTypes.string.isRequired,
  settings: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentGameMode: state.gamesReducer.gameMode,
    lang: state.userSettings.settings.language,
    userWords: state.userWords.words[0].paginatedResults,
    settings: state.userSettings.settings,
  };
};

const mapDispatchToProps = {
  switchGameMode: changeGameMode,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameModeToggle);
