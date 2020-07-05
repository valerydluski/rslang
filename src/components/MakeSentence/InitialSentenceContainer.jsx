import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayControls from '../../containers/MakeSentence/AudioPlayControls';
import InitialSentenceContainerStyled from './Styled/InitialSentenceContainerStyled';
import { InitialSentenceWordsStyled, MainWordStyled } from './Styled/InitialSentenceWordsStyled';
import SentencePartsContainerStyled from './Styled/SentencePartsContainerStyled';

const InitialSentenceContainer = ({ audioSrc, sentence }) => {
  const sentenceParts = sentence.split(' ');
  const words = sentenceParts.map((part, i) => {
    const ifBold = part.includes('<b>');
    const key = `${part}${i}`;
    if (!ifBold) return <InitialSentenceWordsStyled key={key}>{part}</InitialSentenceWordsStyled>;
    const boldWord = part.match(/(?<=<b>)(.*?)(?=<\/b>)/gi)[0];
    return <MainWordStyled key={part}>{boldWord}</MainWordStyled>;
  });
  return (
    <InitialSentenceContainerStyled>
      <AudioPlayControls audioSrc={audioSrc} />
      <SentencePartsContainerStyled>{words}</SentencePartsContainerStyled>
    </InitialSentenceContainerStyled>
  );
};

InitialSentenceContainer.propTypes = {
  audioSrc: PropTypes.string,
  sentence: PropTypes.string,
};

InitialSentenceContainer.defaultProps = {
  audioSrc: '',
  sentence: '',
};

export default InitialSentenceContainer;
