/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './burger.css';

export default function Burger({ clickHandler, isOpen }) {
  const burgerClasses = classNames({
    'menu-i': true,
    'menu-i-open': isOpen,
  });

  const circleRightClasses = classNames({
    'circle-right': true,
    'right-86': isOpen,
  });

  const circleLeftClasses = classNames({
    'circle-left': true,
    'left-86': isOpen,
  });

  const rectLeftClasses = classNames({
    'rect-left': true,
    'left-22': isOpen,
  });

  const rectRightClasses = classNames({
    'rect-right': true,
    'right-22': isOpen,
  });

  const rectWhiteClasses = classNames({
    'fill-white': isOpen,
  });

  const rectRedClasses = classNames({
    'fill-red': isOpen,
  });

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={burgerClasses} onClick={clickHandler}>
      <div className="menu-line">
        <svg
          className={rectLeftClasses}
          width="30"
          height="5"
          viewBox="0 0 30 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectWhiteClasses} width="30" height="5" rx="2.5" fill="#7033FF" />
        </svg>
        <svg
          className={circleRightClasses}
          width="5"
          height="5"
          viewBox="0 0 5 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectRedClasses} width="5" height="5" rx="2.5" fill="#FFBC29" />
        </svg>
      </div>
      <div className="menu-line">
        <svg
          className={circleLeftClasses}
          width="5"
          height="5"
          viewBox="0 0 5 5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectWhiteClasses} width="5" height="5" rx="2.5" fill="#7033FF" />
        </svg>

        <svg
          className={rectRightClasses}
          width="30"
          height="5"
          viewBox="0 0 30 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectWhiteClasses} width="30" height="5" rx="2.5" fill="#FF6024" />
        </svg>
      </div>
      <div className="menu-line">
        <svg
          className={rectLeftClasses}
          width="30"
          height="5"
          viewBox="0 0 30 5"
          fill="#FF6024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectRedClasses} width="30" height="5" rx="2.5" fill="#FFBC29" />
        </svg>
        <svg
          className={circleRightClasses}
          width="5"
          height="5"
          viewBox="0 0 5 5"
          fill="#FF6024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className={rectWhiteClasses} width="5" height="5" rx="2.5" fill="#FF6024" />
        </svg>
      </div>
    </div>
  );
}

Burger.propTypes = {
  clickHandler: PropTypes.func,
  isOpen: PropTypes.bool,
};

Burger.defaultProps = {
  clickHandler: () => {},
  isOpen: false,
};
