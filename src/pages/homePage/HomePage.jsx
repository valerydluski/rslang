import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch } from 'react-router-dom';
import getLoginStatus from '../../utils/getLoginStatus';
import LeftSideBar from '../../components/HomePage/SideBars/LeftSideBar';
import RightSideBar from '../../components/HomePage/SideBars/RightSideBar';
import HomePageContainer from './styled/HomePageContainer';
import MainContainer from '../../containers/Homepage/Content/Main';
import PrivateNavigationRoute from '../../components/Navigation/PrivateNavigationRoute';
import Promo from '../../components/HomePage/Content/Promo/Promo';
import AboutUs from '../../components/HomePage/Content/AboutUs/AboutUs';
import Dictionary from '../../components/HomePage/Content/Dictionary/Dictionary';
import Statistics from '../../components/HomePage/Content/Statistics/Statistics';
import Settings from '../../components/HomePage/Content/Settings/Settings';

function HomePage(props) {
  const { checkStatusSession } = props;

  checkStatusSession();

  if (!getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return (
    <HomePageContainer>
      <LeftSideBar />
      <Switch>
        <PrivateNavigationRoute path="/promo" exact component={Promo} />
        <PrivateNavigationRoute path="/about-us" exact component={AboutUs} />
        <PrivateNavigationRoute path="/dictionary" exact component={Dictionary} />
        <PrivateNavigationRoute path="/statistics" exact component={Statistics} />
        <PrivateNavigationRoute path="/settings" exact component={Settings} />
        <PrivateNavigationRoute path="/home" exact component={MainContainer} />
        <Redirect to="/home" />
      </Switch>
      <RightSideBar />
    </HomePageContainer>
  );
}

HomePage.propTypes = {
  checkStatusSession: PropTypes.func.isRequired,
};

export default HomePage;
