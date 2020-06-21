import React from 'react';
import PropTypes from 'prop-types';
import ModalWordsBlockStyled from './Styled/ModalWordsBlockStyled';

const ModalWordsBlock = (props) => {
  const { header } = props;
  return (
    <>
      <h2>{header}</h2>
      <ModalWordsBlockStyled />
    </>
  );
};

ModalWordsBlock.propTypes = {
  header: PropTypes.string.isRequired,
};

ModalWordsBlock.defaultProps = {};

export default ModalWordsBlock;
