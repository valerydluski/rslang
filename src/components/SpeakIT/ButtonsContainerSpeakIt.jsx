import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { I18n } from 'react-redux-i18n';
import Button from '../UI/Button/Button';
import { DEVICE } from '../../config';

const ButtonsContainerSpeakITStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 30px;

  @media ${DEVICE.tablet} {
    flex-direction: column;
  }
`;

const ButtonsContainerSpeakIT = (props) => {
  const { restartHandler, speakHandler, finishHandler, speakActive } = props;
  return (
    <ButtonsContainerSpeakITStyled>
      <Button text={I18n.t('Buttons.restart')} buttonHandler={restartHandler} />
      <Button
        text={I18n.t('Buttons.speak')}
        className={speakActive ? 'big-button active' : 'big-button'}
        buttonHandler={speakHandler}
      />
      <Button text={I18n.t('Buttons.finish')} buttonHandler={finishHandler} />
    </ButtonsContainerSpeakITStyled>
  );
};

ButtonsContainerSpeakIT.propTypes = {
  restartHandler: PropTypes.func,
  speakHandler: PropTypes.func,
  finishHandler: PropTypes.func,
  speakActive: PropTypes.bool,
};

ButtonsContainerSpeakIT.defaultProps = {
  restartHandler: () => {},
  speakHandler: () => {},
  finishHandler: () => {},
  speakActive: false,
};

export default ButtonsContainerSpeakIT;
