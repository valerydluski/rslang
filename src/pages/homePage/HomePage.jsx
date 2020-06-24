import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import getLoginStatus from '../../utils/getLoginStatus';
import LeftSideBar from '../../components/HomePage/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/HomePage/RightSideBar/RightSideBar';
import HomePageContainer from './styled/HomePageContainer';
import MainContainer from '../../containers/Homepage/Content/Main';

function HomePage(props) {
  const { checkStatusSession } = props;

  checkStatusSession();

  if (!getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return (
    <HomePageContainer>
      <LeftSideBar />
      <MainContainer />
      <RightSideBar />
    </HomePageContainer>
  );
}

HomePage.propTypes = {
  checkStatusSession: PropTypes.func.isRequired,
};

export default HomePage;
