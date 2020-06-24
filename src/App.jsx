import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GamePage from './pages/gamePage/GamePage';
import StartGamePage from './pages/gamePage/StartGamePage';
import Login from './containers/Auth/Login/Login';
import Registration from './containers/Auth/Registration/Registration';
import PrivateNavigationRoute from './components/Navigation/PrivateNavigationRoute';
import GlobalStyle from './styles/globalStyles';
import HomePageContainer from './containers/Homepage/HomePageContainer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <PrivateNavigationRoute path="/" component={HomePageContainer} />
        <PrivateNavigationRoute path="/StartGame/:gameId" component={StartGamePage} />
        <PrivateNavigationRoute path="/Game/:gameId" component={GamePage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
