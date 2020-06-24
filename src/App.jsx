import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import GamePage from './pages/gamePage/GamePage';
import StartGamePage from './pages/gamePage/StartGamePage';
import Login from './containers/Auth/Login/Login';
import Registration from './containers/Auth/Registration/Registration';
import PrivateNavigationRoute from './components/Navigation/PrivateNavigationRoute';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <main>
        <Switch>
          <PrivateNavigationRoute path="/" exact component={HomePage} />
          <PrivateNavigationRoute path="/StartGame/:gameId" component={StartGamePage} />
          <PrivateNavigationRoute path="/Game/:gameId" component={GamePage} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
