import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { RuGameModeToggleStyled, EnGameModeToggleStyled } from './Styled/GameModeToggleStyled';
import { changeGameMode } from '../../redux/Games/action';
import { changeAppMode } from '../../redux/AppMode/action';

const GameModeToggle = (props) => {
  const { currentGameMode, switchGameMode, lang, gameName, switchAppMode } = props;

  if (lang === 'ru')
    return (
      <RuGameModeToggleStyled>
        <label htmlFor="mode-switcher">
          <input
            type="checkbox"
            checked={currentGameMode}
            onClick={() => {
              switchGameMode(!currentGameMode);
              switchAppMode(gameName);
            }}
          />
          <span data-on={I18n.t('Buttons.train')} data-off={I18n.t('Buttons.play')} />
        </label>
      </RuGameModeToggleStyled>
    );

  return (
    <EnGameModeToggleStyled>
      <label htmlFor="mode-switcher">
        <input
          type="checkbox"
          checked={currentGameMode}
          onClick={() => {
            switchGameMode(!currentGameMode);
            switchAppMode(gameName);
          }}
        />
        <span data-on={I18n.t('Buttons.train')} data-off={I18n.t('Buttons.play')} />
      </label>
    </EnGameModeToggleStyled>
  );
};

GameModeToggle.propTypes = {
  switchGameMode: PropTypes.func.isRequired,
  currentGameMode: PropTypes.bool.isRequired,
  switchAppMode: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  gameName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    currentGameMode: state.gamesReducer.gameMode,
    lang: state.userSettings.settings.language,
  };
};

const mapDispatchToProps = {
  switchGameMode: changeGameMode,
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameModeToggle);
