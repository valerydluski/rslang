import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
  const { link, name } = props;
  return (
    <div>
      <li>
        <NavLink to={`/${link}`}>{name}</NavLink>
      </li>
    </div>
  );
};

export default NavigationLink;

NavigationLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

NavigationLink.defaultProps = {
  name: '',
  link: '/',
};
