import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoundSwitch from '../../../containers/RoundSwitch';
import Image from '../../../components/UI/Image/Image';
import TextField from '../../../components/UI/TextField/TextField';
import CardsContainerSpeakIT from '../../../containers/CardsContainerSpeakIT';

const SpeakIT = (props) => {
  const { Level, Page } = props;
  return (
    <div className="speak-it_container">
      <RoundSwitch />
      <p>
        Level: {Level} Page:{Page}
      </p>
      <Image />
      <TextField />
      <CardsContainerSpeakIT />
    </div>
  );
};

SpeakIT.propTypes = {
  Level: PropTypes.string,
  Page: PropTypes.string,
};

SpeakIT.defaultProps = {
  Level: '',
  Page: '',
};

const mapStateToProps = (state) => {
  return {
    Level: state.roundChange.speakITLevel,
    Page: state.roundChange.speakITPage,
  };
};

export default connect(mapStateToProps, null)(SpeakIT);
