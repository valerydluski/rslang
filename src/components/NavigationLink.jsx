import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ name, link }) => (
  <div>
    <li>
      <NavLink to={`/${link}`}>{name}</NavLink>
    </li>
  </div>
);
