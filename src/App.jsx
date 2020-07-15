import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import GamePage from './pages/gamePage/GamePage';
import StartGamePage from './pages/gamePage/StartGamePage';
import Login from './containers/Auth/Login/Login';
import Registration from './containers/Auth/Registration/Registration';
import PrivateNavigationRoute from './components/Navigation/PrivateNavigationRoute';
import GlobalStyle from './styles/globalStyles';
import HomePageContainer from './containers/Homepage/HomePageContainer';
import LearnWords from './pages/LearnWords/LearnWords';
import RepeatWords from './pages/RepeatWords/RepeatWords';
import 'react-toastify/dist/ReactToastify.css';
import { checkStatusSession } from './redux/Auth/Login/actions';

function App({ checkSession }) {
  checkSession();
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/registration" exact component={Registration} />
        <PrivateNavigationRoute path="/StartGame/:gameId" exact component={StartGamePage} />
        <PrivateNavigationRoute path="/Game/:gameId" exact component={GamePage} />
        <PrivateNavigationRoute path="/learn" exact component={LearnWords} />
        <PrivateNavigationRoute path="/repeat" exact component={RepeatWords} />
        <PrivateNavigationRoute path="/" component={HomePageContainer} />
        <Redirect to="/home" />
      </Switch>
      <ToastContainer
        className="toast-container"
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

App.propTypes = {
  checkSession: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  checkSession: checkStatusSession,
};
export default connect(null, mapDispatchToProps)(App);
