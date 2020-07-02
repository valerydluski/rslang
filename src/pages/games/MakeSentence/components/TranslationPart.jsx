import React from 'react';
import PropTypes from 'prop-types';
import TranslationPartStyled from '../Styled/TranslationPartStyled';

const TranslationPart = ({ part }) => {
  return <TranslationPartStyled>{part}</TranslationPartStyled>;
};

TranslationPart.propTypes = {
  part: PropTypes.string,
};

TranslationPart.defaultProps = {
  part: '',
};

export default TranslationPart;
