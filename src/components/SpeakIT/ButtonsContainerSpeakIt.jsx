import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { I18n } from 'react-redux-i18n';
import Button from '../UI/Button/Button';

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
      <Button text={I18n.t('Buttons.restart')} buttonHandler={restartHandler} />
      <Button text={I18n.t('Buttons.speak')} className="big-button" buttonHandler={speakHandler} />
      <Button text={I18n.t('Buttons.finish')} buttonHandler={finishHandler} />
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
