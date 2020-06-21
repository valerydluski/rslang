import React from 'react';
import NavigationPanel from '../../components/Navigation/NavigationPanel';
import Logo from '../../containers/UI/Logo';

const HomePage = () => (
  <div className="home-page_container">
    <Logo />
    <nav className="home-page_navigation">
      <NavigationPanel />
    </nav>
    <div className="home-page_content">
      <h1>Home Page</h1>
    </div>
  </div>
);

export default HomePage;
