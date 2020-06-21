import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationLink = (props) => {
  const { link, name } = props;
  return (
    <div>
      <li>
        <Link to={link}>{name}</Link>
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
