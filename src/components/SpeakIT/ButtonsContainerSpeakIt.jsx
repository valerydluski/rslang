import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ButtonSpeakIT from '../UI/Button/ButtonSpeakIT';

const ButtonsContainerSpeakITStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
`;

const ButtonsContainerSpeakIT = (props) => {
  const { restartHandler, speakHandler, finishHandler } = props;
  return (
    <ButtonsContainerSpeakITStyled>
      <ButtonSpeakIT text="restart" buttonHandler={restartHandler} />
      <ButtonSpeakIT text="speak please" className="big-button" buttonHandler={speakHandler} />
      <ButtonSpeakIT text="finish" buttonHandler={finishHandler} />
    </ButtonsContainerSpeakITStyled>
  );
};

ButtonsContainerSpeakIT.propTypes = {
  restartHandler: PropTypes.func,
  speakHandler: PropTypes.func,
  finishHandler: PropTypes.func,
};

ButtonsContainerSpeakIT.defaultProps = {
  restartHandler: () => {},
  speakHandler: () => {},
  finishHandler: () => {},
};

export default ButtonsContainerSpeakIT;
