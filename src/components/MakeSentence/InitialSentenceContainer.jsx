import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AudioPlayControls from '../../containers/MakeSentence/AudioPlayControls';
import InitialSentenceContainerStyled from './Styled/InitialSentenceContainerStyled';
import { InitialSentenceWordsStyled, MainWordStyled } from './Styled/InitialSentenceWordsStyled';
import SentencePartsContainerStyled from './Styled/SentencePartsContainerStyled';

const InitialSentenceContainer = ({ audioSrc, sentence, mainWordTranslation }) => {
  const [isTranslateShowing, toggleShowTranslation] = useState(false);
  const sentenceParts = sentence.split(' ');
  const showTranslation = () => {
    toggleShowTranslation(true);
    setTimeout(() => toggleShowTranslation(false), 2000);
  };

  const words = sentenceParts.map((part, i) => {
    const ifBold = part.includes('<b>');
    const key = `${part}${i}`;
    if (!ifBold) return <InitialSentenceWordsStyled key={key}>{part}</InitialSentenceWordsStyled>;
    const mainWord = part.match(/(?<=<b>)(.*?)(?=<\/b>)/gi)[0];
    return (
      <MainWordStyled key={part} onClick={() => showTranslation()}>
        {mainWord}
        {isTranslateShowing ? <div>{mainWordTranslation}</div> : null}
      </MainWordStyled>
    );
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
  mainWordTranslation: PropTypes.string,
};

InitialSentenceContainer.defaultProps = {
  audioSrc: '',
  sentence: '',
  mainWordTranslation: '',
};

export default InitialSentenceContainer;
