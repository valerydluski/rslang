import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContent from './ModalContent';
import Image from '../../components/UI/Image/Image';
import ModalButtonsContainerStyled from './Styled/ModalButtonsContainerStyled';
import Button from '../../components/UI/Button/Button';
import GoToHomePageButton from '../Buttons/GoHomePageButton/GoHomePageButton';
import { LINK_FOR_IMAGE } from '../../config';

const ModalResult = (props) => {
  const { imageSrc, showProperties, audioForPlay, isChangeImage, playAudio } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);

  const restartHandler = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('hidden');
  };

  const newGameHandler = () => {
    restartHandler();
  };

  const statisticHandler = () => {
    console.log('тут могла быть ваша реклама');
  };

  const wordHandler = (obj) => {
    if (isChangeImage) setSrcForImage(`${LINK_FOR_IMAGE}${obj.image}`);
    if (audioForPlay) playAudio(obj[audioForPlay]);
  };

  return (
    <OverlayStyled id="overlay">
      <ModalStyled>
        <GoToHomePageButton />
        <Image src={srcForImage} className="small-img" />
        <ModalContent showProperties={showProperties} wordHandler={wordHandler} />
        <ModalButtonsContainerStyled>
          <Button buttonHandler={restartHandler} text="restart" />
          <Button buttonHandler={newGameHandler} text="new game" />
          <Button buttonHandler={statisticHandler} text="statistic" />
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
  playAudio: PropTypes.func,
};

ModalResult.defaultProps = {
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  showProperties: ['word'],
  audioForPlay: '',
  isChangeImage: true,
  playAudio: () => {},
};

export default ModalResult;
