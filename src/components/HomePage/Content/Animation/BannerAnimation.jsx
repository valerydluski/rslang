import React, { useState, useEffect, useCallback } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../../assets/animation/banner/data.json';
import animationDataMobile from '../../../../assets/animation/banner-mobile/data.json';
import AnimationContainerStyled from './Styled/AnimationContainerStyled';
import getScreenWidth from '../../../../utils/getScreenWidth';

function SignInAnimation() {
  const [isBreakpoint, changeBreakpoint] = useState(false);

  const breakpoint = 768;

  const prevWidth = getScreenWidth();

  const onResize = useCallback(() => {
    const width = getScreenWidth();
    if (width <= breakpoint) {
      changeBreakpoint(true);
    } else {
      changeBreakpoint(false);
    }
  }, [changeBreakpoint]);

  const onOrientationChange = useCallback(() => {
    const width = getScreenWidth();
    if (width < breakpoint) {
      changeBreakpoint(true);
    } else {
      changeBreakpoint(false);
    }
  }, [changeBreakpoint]);

  useEffect(() => {
    if (prevWidth < breakpoint) {
      changeBreakpoint(true);
    }
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  }, [prevWidth, onResize, onOrientationChange]);

  const options = {
    loop: true,
    autoplay: true,
    animationData: isBreakpoint ? animationDataMobile : animationData,
    rendererSettings: {
      preserveAspectRatio: isBreakpoint ? 'xMinYMin slice' : 'xMinYMid slice',
    },
  };

  return (
    <AnimationContainerStyled>
      <Lottie options={options} />
    </AnimationContainerStyled>
  );
}

export default SignInAnimation;
