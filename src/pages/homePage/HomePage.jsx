import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import getLoginStatus from '../../utils/getLoginStatus';
import LeftSideBar from '../../components/HomePage/LeftSideBar/LeftSideBar';
import Main from '../../components/HomePage/Main';
import RightSideBar from '../../components/HomePage/RightSideBar';

function HomePage(props) {
  const { checkStatusSession } = props;

  checkStatusSession();

  if (!getLoginStatus()) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <LeftSideBar />
      <Main />
      <RightSideBar />
    </>
  );
}

HomePage.propTypes = {
  checkStatusSession: PropTypes.func.isRequired,
};

export default HomePage;
