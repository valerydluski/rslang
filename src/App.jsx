import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GamePage from './pages/gamePage/GamePage';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/SpeakIT" render={() => <GamePage gameName="SpeakIT" />} />
          <Route path="/EnglishPuzzle" render={() => <GamePage gameName="EnglishPuzzle" />} />
          <Route path="/Savannah" render={() => <GamePage gameName="Savannah" />} />
          <Route path="/AudioCall" render={() => <GamePage gameName="AudioCall" />} />
          <Route path="/Sprint" render={() => <GamePage gameName="Sprint" />} />
          <Route path="/OwnGame" render={() => <GamePage gameName="OwnGame" />} />
          <Redirect to="/LoginPage" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
