import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation/signin/data.json';

function SignInAnimation({ defaultOptions }) {
  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

SignInAnimation.propTypes = {
  defaultOptions: PropTypes.instanceOf(Object),
};

SignInAnimation.defaultProps = {
  defaultOptions: {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
};

export default SignInAnimation;
