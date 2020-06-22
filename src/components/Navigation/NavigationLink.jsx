import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
  const { href, name } = props;
  return <NavLink to={href}>{name}</NavLink>;
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavigationLink;
