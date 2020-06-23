import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AudioPlayButton from './AudioPlayButtons';
import Image from '../UI/Image/Image';
import TextField from '../UI/TextField/TextField';

const FinishedWordInfoStyled = styled.div`
  margin: 50px auto 20px;
`;

const FinishedWordInfoDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

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
  word: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default FinishedWordInfo;
