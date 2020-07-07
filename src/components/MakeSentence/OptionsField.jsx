import React from 'react';
import PropTypes from 'prop-types';
import OptionsFieldStyled from './Styled/OptionsFieldStyled';
import TranslationPart from './TranslationPart';

const OptionsField = ({ optionsParts }) => {
  const parts = optionsParts.map((part, i) => {
    const key = `${part}${i}`;
    return <TranslationPart key={key} part={part} index={i} type="option" />;
  });
  return <OptionsFieldStyled>{parts}</OptionsFieldStyled>;
};

OptionsField.propTypes = {
  optionsParts: PropTypes.instanceOf(Array),
};

OptionsField.defaultProps = {
  optionsParts: [],
};

export default OptionsField;
