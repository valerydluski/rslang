import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import SpeakIT from './components/SpeakIT';
import EnglishPuzzle from './components/EnglishPuzzle';
import Savannah from './components/Savannah';
import AudioCall from './components/AudioCall';
import Sprint from './components/Sprint';
import OwnGame from './components/OwnGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RSLANG</h1>
      </header>
      <nav className="nav">
        <NavigationPanel />
      </nav>
      <main>
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          <Route path="/SpeakIT" component={SpeakIT} />
          <Route path="/EnglishPuzzle" component={EnglishPuzzle} />
          <Route path="/Savannah" component={Savannah} />
          <Route path="/AudioCall" component={AudioCall} />
          <Route path="/Sprint" component={Sprint} />
          <Route path="/ownGame" component={OwnGame} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
