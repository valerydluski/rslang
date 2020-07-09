import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import GameFieldsContainerStyled from './Styled/GameFieldsContainerStyled';
import AnswerField from '../../components/MakeSentence/AnswerField';
import OptionsField from '../../components/MakeSentence/OptionsField';
import shuffleArray from '../../utils/shuffleArray';
import { DontKnowButton, NextButton } from '../../components/MakeSentence/MakeSentenceControls';
import calcOwnWordsSentenceWidth from '../../utils/calcOwnWordsSentenceWidth';

const GameFieldsContainer = ({
  toggleWordStatus,
  sentenceTranslation,
  isWordFinished,
  isAutoSolve,
  autoSolve,
  switchToNextSentence,
}) => {
  const [optionParts, changeOptionParts] = useState(shuffleArray(sentenceTranslation.split(' ')));
  const [answerParts, changeAnswerParts] = useState([]);
  const [wordsWidth, changeWordsWidth] = useState({});

  const checkAnswer = () => {
    const result = answerParts.join(' ') === sentenceTranslation;
    if (result) {
      toggleWordStatus(true);
    }
  };

  useEffect(() => {
    if (optionParts.length === 0) {
      checkAnswer();
    }
  });

  useEffect(() => {
    const widths = calcOwnWordsSentenceWidth(sentenceTranslation);
    changeWordsWidth(widths);
  }, [sentenceTranslation]);

  const swapPart = (type, index) => {
    const isOption = type === 'option';
    const options = [...optionParts];
    const answers = [...answerParts];
    const replacingPart = isOption ? options.splice(index, 1)[0] : answers.splice(index, 1)[0];
    if (isOption) answers.push(replacingPart);
    else options.push(replacingPart);
    changeOptionParts(options);
    changeAnswerParts(answers);
  };

  const dragHandler = (result) => {
    const { destination, source } = result;
    const options = [...optionParts];
    const answers = [...answerParts];
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId === 'target' && source.droppableId === 'source') {
      const item = options.splice(source.index, 1);
      answers.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === 'target' && source.droppableId === 'target') {
      const item = answers.splice(source.index, 1);
      answers.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === 'source' && source.droppableId === 'source') {
      const item = options.splice(source.index, 1);
      options.splice(destination.index, 0, ...item);
    } else if (destination.droppableId === 'source' && source.droppableId === 'target') {
      const item = answers.splice(source.index, 1);
      options.splice(destination.index, 0, ...item);
    }
    changeOptionParts(options);
    changeAnswerParts(answers);
  };

  const clickFieldHandler = (e) => {
    if (e.target.hasAttribute('data-type') && !isWordFinished) {
      swapPart(e.target.dataset.type, e.target.dataset.index);
    }
  };

  if (isAutoSolve) {
    return (
      <GameFieldsContainerStyled>
        <AnswerField
          isDragging={false}
          answerParts={sentenceTranslation.split(' ')}
          wordsWidth={wordsWidth}
        />
        <OptionsField isDragging={false} wordsWidth={wordsWidth} />
        <NextButton switchToNextSentence={switchToNextSentence} />
      </GameFieldsContainerStyled>
    );
  }

  return (
    <GameFieldsContainerStyled onClick={clickFieldHandler}>
      <DragDropContext onDragEnd={dragHandler}>
        <AnswerField isDragging answerParts={answerParts} wordsWidth={wordsWidth} />
        <OptionsField isDragging optionsParts={optionParts} wordsWidth={wordsWidth} />
      </DragDropContext>
      {isWordFinished ? (
        <NextButton switchToNextSentence={switchToNextSentence} />
      ) : (
        <DontKnowButton clickHandler={autoSolve} />
      )}
    </GameFieldsContainerStyled>
  );
};

GameFieldsContainer.propTypes = {
  sentenceTranslation: PropTypes.string.isRequired,
  toggleWordStatus: PropTypes.func,
  isWordFinished: PropTypes.bool,
  isAutoSolve: PropTypes.bool,
  autoSolve: PropTypes.func,
  switchToNextSentence: PropTypes.func,
};

GameFieldsContainer.defaultProps = {
  isWordFinished: false,
  isAutoSolve: false,
  autoSolve: () => {},
  toggleWordStatus: () => {},
  switchToNextSentence: () => {},
};

export default GameFieldsContainer;
