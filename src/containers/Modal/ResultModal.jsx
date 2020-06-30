import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContent from './ModalContent';
import Image from '../../components/UI/Image/Image';
import ModalButtonsContainerStyled from './Styled/ModalButtonsContainerStyled';
import Button from '../../components/UI/Button/Button';
import GoToHomePageButton from '../Buttons/GoHomePageButton/GoHomePageButton';
import { LINK_FOR_IMAGE, LINK_FOR_AUDIO } from '../../config';

const ModalResult = (props) => {
  const {
    imageSrc,
    showProperties,
    audioForPlay,
    isChangeImage,
    restartGame,
    newGame,
    correctWords,
  } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);

  const restartHandler = () => {
    restartGame();
  };

  const wordAudio = new Audio();

  const playAudio = (src) => {
    wordAudio.src = `${LINK_FOR_AUDIO}${src}`;
    wordAudio.load();
    wordAudio.play();
  };

  const newGameHandler = () => {
    newGame();
  };

  const statisticHandler = () => {};

  const wordHandler = (obj) => {
    if (isChangeImage) setSrcForImage(`${LINK_FOR_IMAGE}${obj.image}`);
    if (audioForPlay) {
      playAudio(obj[audioForPlay]);
    }
  };

  return (
    <OverlayStyled id="overlay">
      <GoToHomePageButton />
      <ModalStyled>
        <Image src={srcForImage} className="small-img" />
        <ModalContent
          showProperties={showProperties}
          wordHandler={wordHandler}
          correctWords={correctWords}
          audioForPlay={audioForPlay}
        />
        <ModalButtonsContainerStyled>
          <Button buttonHandler={restartHandler} text={I18n.t('Buttons.restart')} />
          <Button buttonHandler={newGameHandler} text={I18n.t('Buttons.newGame')} />
          <Button buttonHandler={statisticHandler} text={I18n.t('Buttons.statistic')} />
        </ModalButtonsContainerStyled>
      </ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  imageSrc: PropTypes.string,
  showProperties: PropTypes.instanceOf(Array),
  audioForPlay: PropTypes.string,
  isChangeImage: PropTypes.bool,
  restartGame: PropTypes.func,
  newGame: PropTypes.func,
  correctWords: PropTypes.instanceOf(Array),
};

ModalResult.defaultProps = {
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  showProperties: ['word'],
  audioForPlay: '',
  isChangeImage: true,
  correctWords: null,
  restartGame: () => {},
  newGame: () => {},
};

export default ModalResult;
