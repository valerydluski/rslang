import React from 'react';
import Logo from '../../containers/UI/Logo';
import GameNavigationMenu from '../../containers/Navigation/GameNavigationMenu';

const HomePage = () => (
  <div className="home-page_container">
    <Logo />
    <nav className="home-page_navigation">
      <GameNavigationMenu />
    </nav>
    <div className="home-page_content">
      <h1>Home Page</h1>
    </div>
  </div>
);

export default HomePage;
