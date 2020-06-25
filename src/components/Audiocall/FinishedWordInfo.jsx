import React from 'react';
import PropTypes from 'prop-types';
import { FinishedWordInfoStyled, FinishedWordInfoDetails } from './styled/StyledFinishedWordInfo';
import AudioPlayButton from '../../containers/Audiocall/AudioPlayButtons';
import Image from '../UI/Image/Image';
import TextField from '../UI/TextField/TextField';

const FinishedWordInfo = ({ word, audioSrc, imageSrc }) => {
  return (
    <FinishedWordInfoStyled>
      <Image src={imageSrc} />
      <FinishedWordInfoDetails>
        <AudioPlayButton src={audioSrc} />
        <TextField text={word} />
      </FinishedWordInfoDetails>
    </FinishedWordInfoStyled>
  );
};

FinishedWordInfo.propTypes = {
  word: PropTypes.string,
  audioSrc: PropTypes.string,
  imageSrc: PropTypes.string,
};

FinishedWordInfo.defaultProps = {
  word: '',
  audioSrc: '',
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
};

export default FinishedWordInfo;
