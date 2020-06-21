import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationPanel from './components/Navigation/NavigationPanel';
import SpeakIT from './pages/games/SpeakIt/SpeakIT';
import EnglishPuzzle from './pages/games/EnglishPuzzle/EnglishPuzzle';
import Savannah from './pages/games/Savannah/Savannah';
import AudioCall from './pages/games/AudioCall/AudioCall';
import Sprint from './pages/games/Sprint/Sprint';
import OwnGame from './pages/games/OwnGame/OwnGame';
import Login from './containers/Auth/Login/Login';
import Registration from './containers/Auth/Registration/Registration';
import PrivateNavigationRoute from './components/Navigation/PrivateNavigationRoute';

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
          <PrivateNavigationRoute path="/SpeakIT" component={SpeakIT} />
          <PrivateNavigationRoute path="/EnglishPuzzle" component={EnglishPuzzle} />
          <PrivateNavigationRoute path="/Savannah" component={Savannah} />
          <PrivateNavigationRoute path="/AudioCall" component={AudioCall} />
          <PrivateNavigationRoute path="/Sprint" component={Sprint} />
          <PrivateNavigationRoute path="/ownGame" component={OwnGame} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
