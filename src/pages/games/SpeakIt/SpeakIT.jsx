import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoundSwitch from '../../../containers/RoundSwitch';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/CardsContainerSpeakIT';

const SpeakIT = (props) => {
  const { Level, Page, imageSrc, translate } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [textForTextField, setTranslate] = useState(translate);

  const audioSpeakIt = new Audio();

  const playAudio = (src) => {
    const link = 'https://raw.githubusercontent.com/valerydluski/rslang-data/master/';
    audioSpeakIt.setAttribute('src', `${link}${src}`);
    audioSpeakIt.load();
    audioSpeakIt.play();
  };

  const cardHandler = (obj) => {
    const link = `https://raw.githubusercontent.com/valerydluski/rslang-data/master/${obj.image}`;
    setSrcForImage(link);
    setTranslate(obj.wordTranslate);
    playAudio(obj.audio);
  };

  return (
    <div className="speak-it_container">
      <RoundSwitch />
      <p>
        Level: {Level} Page:{Page}
      </p>
      <Image src={srcForImage} />
      <TextField text={textForTextField} />
      <CardsContainerSpeakIT cardHandler={cardHandler} />
    </div>
  );
};

SpeakIT.propTypes = {
  Level: PropTypes.string,
  Page: PropTypes.string,
  imageSrc: PropTypes.string,
  translate: PropTypes.string,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
  imageSrc:
    'https://raw.githubusercontent.com/valerydluski/Images/ca230ba9ba73d437f3b80fe90d55f87aebfa7df0/defaultImage.svg',
  translate: '',
};

const mapStateToProps = (state) => {
  return {
    Level: state.roundChange.speakITLevel,
    Page: state.roundChange.speakITPage,
  };
};

export default connect(mapStateToProps, null)(SpeakIT);
