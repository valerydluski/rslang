import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Switch } from 'react-router-dom';
import getLoginStatus from '../../utils/getLoginStatus';
import RightSideBar from '../../components/HomePage/SideBars/RightSideBar';
import HomePageContainer from './styled/HomePageContainer';
import MainContainer from '../../containers/Homepage/Content/Main';
import PrivateNavigationRoute from '../../components/Navigation/PrivateNavigationRoute';
import Promo from '../../components/HomePage/Content/Promo/Promo';
import AboutUsContainer from '../../containers/Homepage/Content/AboutUs/Content/AboutUs';
import Statistics from '../../components/HomePage/Content/Statistics/Statistics';
import Settings from '../../components/HomePage/Content/Settings/Settings';
import LeftSideBarContainer from '../../containers/Homepage/SideBars/LeftSideBarContainer';
import DictionaryContainer from '../../containers/Homepage/Dictionary/DictionaryContainer';

function HomePage(props) {
  const { checkStatusSession } = props;

  checkStatusSession();

  if (!getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return (
    <HomePageContainer>
      <LeftSideBarContainer />
      <Switch>
        <PrivateNavigationRoute path="/promo" exact component={Promo} />
        <PrivateNavigationRoute path="/about-us" exact component={AboutUsContainer} />
        <PrivateNavigationRoute path="/dictionary" component={DictionaryContainer} />
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
