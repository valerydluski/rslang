import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import GamePage from './pages/gamePage/GamePage';
import StartGamePage from './pages/gamePage/StartGamePage';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/StartGame/:gameName" component={StartGamePage} />
          <Route path="/Game/:gameName" component={GamePage} />
          <Redirect to="/LoginPage" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
