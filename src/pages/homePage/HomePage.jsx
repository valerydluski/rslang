import React from 'react';
import Logo from '../../containers/UI/Logo';
import GameNavigationMenu from '../../containers/Navigation/GameNavigationMenu';

const HomePage = () => (
  <div>
    <Logo />
    <GameNavigationMenu />
    <div>
      <h1>Home Page</h1>
    </div>
  </div>
);

export default HomePage;
