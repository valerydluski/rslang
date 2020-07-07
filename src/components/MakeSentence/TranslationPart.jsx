import React from 'react';
import PropTypes from 'prop-types';
import TranslationPartStyled from './Styled/TranslationPartStyled';

const TranslationPart = ({ part, type, index }) => {
  return (
    <TranslationPartStyled data-type={type} data-index={index}>
      {part}
    </TranslationPartStyled>
  );
};

TranslationPart.propTypes = {
  part: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number.isRequired,
};

TranslationPart.defaultProps = {
  part: '',
  type: '',
};

export default TranslationPart;
