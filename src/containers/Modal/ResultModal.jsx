import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContent from './ModalContent';
import Image from '../../components/UI/Image/Image';
import ModalButtonsContainerStyled from './Styled/ModalButtonsContainerStyled';
import ButtonSpeakIT from '../../components/UI/Button/ButtonSpeakIT';

const ModalResult = (props) => {
  const { imageSrc, showProperties } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);

  const returnHandler = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.toggle('hidden');
  };

  const newGameHandler = () => {
    returnHandler();
  };

  const statisticHandler = () => {
    console.log('тут могла быть ваша реклама');
  };

  return (
    <OverlayStyled className="hidden" id="overlay">
      <ModalStyled>
        <Image src={srcForImage} className="small-img" />
        <ModalContent showProperties={showProperties} />
        <ModalButtonsContainerStyled>
          <ButtonSpeakIT buttonHandler={returnHandler} text="return" />
          <ButtonSpeakIT buttonHandler={newGameHandler} text="new game" />
          <ButtonSpeakIT buttonHandler={statisticHandler} text="statistic" />
        </ModalButtonsContainerStyled>
      </ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  imageSrc: PropTypes.string,
  showProperties: PropTypes.instanceOf(Array),
};

ModalResult.defaultProps = {
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  showProperties: ['word'],
};

export default ModalResult;
