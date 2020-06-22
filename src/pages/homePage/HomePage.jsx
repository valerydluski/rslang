import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Logo from '../../containers/UI/Logo';
import GameNavigationMenu from '../../containers/Navigation/GameNavigationMenu';
import getLoginStatus from '../../utils/getLoginStatus';

function HomePage(props) {
  const { checkStatusSession } = props;

  checkStatusSession();

  if (!getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Logo />
      <GameNavigationMenu />
      <div>
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  checkStatusSession: PropTypes.func.isRequired,
};

export default HomePage;
