import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
  const { link, name } = props;
  return (
    <li>
      <NavLink to={`/${link}`}>{name}</NavLink>
    </li>
  );
};

NavigationLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string.isRequired,
};

NavigationLink.defaultProps = {
  name: '',
};

export default NavigationLink;
