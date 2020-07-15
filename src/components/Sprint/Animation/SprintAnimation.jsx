import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-web';
import animationData from '../../../assets/animation/sprint/data.json';
import AnimationContainerStyled from './Styled/AnimationContainerStyled';

function GamesAnimation({ defaultOptions }) {
  return (
    <AnimationContainerStyled>
      <Lottie options={defaultOptions} />
    </AnimationContainerStyled>
  );
}

GamesAnimation.propTypes = {
  defaultOptions: PropTypes.instanceOf(Object),
};

GamesAnimation.defaultProps = {
  defaultOptions: {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMid slice',
    },
  },
};

export default GamesAnimation;
