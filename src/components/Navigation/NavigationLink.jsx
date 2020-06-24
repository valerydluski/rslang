import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
  const { href, name } = props;
  return <Link to={href}>{name}</Link>;
};

NavigationLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavigationLink;
