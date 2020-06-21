import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContentStyled from './Styled/ModalContentStyled';
import Image from '../../components/UI/Image/Image';
import ModalButtonsContainerStyled from './Styled/ModalButtonsContainerStyled';
import ButtonSpeakIT from '../../components/UI/Button/ButtonSpeakIT';

const ModalResult = (props) => {
  const { wordsCollection, unspokenWords, imageSrc, showProperties } = props;

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
        <ModalContentStyled>
          <Image src={srcForImage} className="small-img" />
        </ModalContentStyled>
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
  wordsCollection: PropTypes.instanceOf(Array),
  imageSrc: PropTypes.string,
  showProperties: PropTypes.instanceOf(Array),
  unspokenWords: PropTypes.instanceOf(Array).isRequired,
};

ModalResult.defaultProps = {
  wordsCollection: [],
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  showProperties: ['word'],
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
    unspokenWords: state.changeUnspokenWords.unspokenWords,
  };
};

export default connect(mapStateToProps, null)(ModalResult);
