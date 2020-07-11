import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeAppMode } from '../../../redux/AppMode/action';
import StyledGoHomeButton from '../../../components/UI/Button/Styled/StyledGoHomeButton';
import { changeGameMode } from '../../../redux/Games/action';

const GoHomePageButton = ({ switchAppMode, switchGameMode }) => {
  const history = useHistory();
  function goHome() {
    switchAppMode('MainPage');
    switchGameMode(false);
    history.push('/home');
  }
  return <StyledGoHomeButton type="button" onClick={goHome} />;
};

GoHomePageButton.propTypes = {
  switchAppMode: PropTypes.func.isRequired,
  switchGameMode: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
  switchGameMode: changeGameMode,
};

export default connect(null, mapDispatchToProps)(GoHomePageButton);
