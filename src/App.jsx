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
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <PrivateNavigationRoute path="/StartGame/:gameId" exact component={StartGamePage} />
        <PrivateNavigationRoute path="/Game/:gameId" exact component={GamePage} />
        <PrivateNavigationRoute path="/" component={HomePageContainer} />

        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
