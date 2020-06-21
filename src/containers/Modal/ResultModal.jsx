import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContentStyled from './Styled/ModalContentStyled';
import Image from '../../components/UI/Image/Image';

const ModalResult = (props) => {
  const { wordsCollection, unspokenWords, imageSrc } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);

  return (
    <OverlayStyled className="hidden" id="overlay">
      <ModalStyled>
        <ModalContentStyled>
          <Image src={srcForImage} className="small-img" />
        </ModalContentStyled>
      </ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  imageSrc: PropTypes.string,
};

ModalResult.defaultProps = {
  wordsCollection: [],
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.changeWordsCollection.wordsCollection,
    unspokenWords: state.changeUnspokenWords.unspokenWords,
  };
};

export default connect(mapStateToProps, null)(ModalResult);
