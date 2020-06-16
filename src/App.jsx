import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavigationPanel from './components/Navigation/NavigationPanel';
import SpeakIT from './pages/games/SpeakIt/SpeakIT';
import EnglishPuzzle from './pages/games/EnglishPuzzle/EnglishPuzzle';
import Savannah from './pages/games/Savannah/Savannah';
import AudioCall from './pages/games/AudioCall/AudioCall';
import Sprint from './pages/games/Sprint/Sprint';
import OwnGame from './pages/games/OwnGame/OwnGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RSLANG</h1>
        <NavigationPanel />
      </header>
      <main>
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/SpeakIT" component={SpeakIT} />
          <Route path="/EnglishPuzzle" component={EnglishPuzzle} />
          <Route path="/Savannah" component={Savannah} />
          <Route path="/AudioCall" component={AudioCall} />
          <Route path="/Sprint" component={Sprint} />
          <Route path="/ownGame" component={OwnGame} />
          <Redirect to="/LoginPage" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
