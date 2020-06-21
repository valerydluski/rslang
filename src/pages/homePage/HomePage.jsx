import React from 'react';
import NavigationPanel from '../../components/Navigation/NavigationPanel';

const HomePage = () => (
  <div className="home-page_container">
    <nav className="home-page_navigation">
      <h1>RSLANG</h1>
      <NavigationPanel />
    </nav>
    <div className="home-page_content">
      <h1>Home Page</h1>
    </div>
  </div>
);

export default HomePage;
