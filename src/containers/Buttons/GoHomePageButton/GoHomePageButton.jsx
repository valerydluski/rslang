import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeAppMode from '../../../redux/AppMode/action';
import StyledGoHomeButton from '../../../components/UI/Button/Styled/StyledGoHomeButton';

const GoHomePageButton = ({ switchAppMode }) => {
  const history = useHistory();
  function goHome() {
    switchAppMode('MainPage');
    history.push('/home');
  }
  return <StyledGoHomeButton type="button" onClick={goHome} />;
};

GoHomePageButton.propTypes = {
  switchAppMode: PropTypes.func.isRequired,
};
const mapDispatchToProps = {
  switchAppMode: changeAppMode,
};

export default connect(null, mapDispatchToProps)(GoHomePageButton);
