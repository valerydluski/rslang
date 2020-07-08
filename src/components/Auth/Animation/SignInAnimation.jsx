import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation/signin/data.json';

class SignInAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default SignInAnimation;
