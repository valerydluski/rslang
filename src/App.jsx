import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavigationPanel from './components/Navigation/NavigationPanel';
import SpeakIT from './pages/games/SpeakIt/SpeakIT';
import EnglishPuzzle from './pages/games/EnglishPuzzle/EnglishPuzzle';
import Savannah from './pages/games/Savannah/Savannah';
import AudioCall from './pages/games/AudioCall/AudioCall';
import Sprint from './pages/games/Sprint/Sprint';
import OwnGame from './pages/games/OwnGame/OwnGame';
import Login from './containers/Auth/Login/Login';
import Registration from './containers/Auth/Registration/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>RSLANG</h1>
      </header>
      <main>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <h1>Home Page</h1>
                <NavigationPanel />
              </>
            )}
          />
          <Route path="/SpeakIT" component={SpeakIT} />
          <Route path="/EnglishPuzzle" component={EnglishPuzzle} />
          <Route path="/Savannah" component={Savannah} />
          <Route path="/AudioCall" component={AudioCall} />
          <Route path="/Sprint" component={Sprint} />
          <Route path="/ownGame" component={OwnGame} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
