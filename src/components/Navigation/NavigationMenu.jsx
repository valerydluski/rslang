import React from 'react';
import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink';

export default function NavigationMenu(props) {
  const { links, activeLinkClass } = props;

  return (
    <nav>
      <ul> 
        {links.map((link) => {
          const { name, href } = link;
          return (
            <li key={name}>
              <NavigationLink href={href} name={name} activeLinkClass={activeLinkClass} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

NavigationMenu.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
  activeLinkClass: PropTypes.string,
};

NavigationMenu.defaultProps = {
  activeLinkClass: '',
};
