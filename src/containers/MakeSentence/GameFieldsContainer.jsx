import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';
import GameFieldsContainerStyled from './Styled/GameFieldsContainerStyled';
import AnswerField from '../../components/MakeSentence/AnswerField';
import OptionsField from '../../components/MakeSentence/OptionsField';
import ButtonsContainerStyled from './Styled/ButtonsContainerStyled';
import shuffleArray from '../../utils/shuffleArray';
import {
  DontKnowButton,
  NextButton,
  CheckButton,
} from '../../components/MakeSentence/MakeSentenceControls';
import calcOwnWordsSentenceWidth from '../../utils/calcOwnWordsSentenceWidth';

const GameFieldsContainer = ({
  sentenceTranslation,
  isWordFinished,
  isAutoSolve,
  autoSolve,
  switchToNextSentence,
  checkSentence,
  isCheckShow,
}) => {
  const [optionParts, changeOptionParts] = useState(shuffleArray(sentenceTranslation.split(' ')));
  const [answerParts, changeAnswerParts] = useState([]);
  const [wordsWidth, changeWordsWidth] = useState({});
  const [isCheckButtonShow, changeShowMode] = useState(false);

  const onResize = useCallback(() => {
    const widths = calcOwnWordsSentenceWidth(sentenceTranslation);
    changeWordsWidth(widths);
  }, [changeWordsWidth, sentenceTranslation]);

  const onOrientationChange = useCallback(() => {
    const widths = calcOwnWordsSentenceWidth(sentenceTranslation);
    changeWordsWidth(widths);
  }, [changeWordsWidth, sentenceTranslation]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onOrientationChange);
  });

  useEffect(() => {
    if (optionParts.length === 0) {
      changeShowMode(true);
    } else if (isCheckButtonShow) {
      changeShowMode(false);
    }
  });

  useEffect(() => {
    const widths = calcOwnWordsSentenceWidth(sentenceTranslation);
    changeWordsWidth(widths);
    // changeShowMode(false);
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
        <AnswerField
          isDragging={!isWordFinished}
          answerParts={answerParts}
          wordsWidth={wordsWidth}
          isCheckShow={isCheckShow}
          sentenceTranslationParts={sentenceTranslation.split(' ')}
        />
        <OptionsField isDragging optionsParts={optionParts} wordsWidth={wordsWidth} />
      </DragDropContext>
      {isWordFinished ? (
        <NextButton switchToNextSentence={switchToNextSentence} />
      ) : (
        <ButtonsContainerStyled>
          <DontKnowButton clickHandler={autoSolve} />
          {isCheckButtonShow ? (
            <CheckButton checkSentence={() => checkSentence(answerParts)} />
          ) : null}
        </ButtonsContainerStyled>
      )}
    </GameFieldsContainerStyled>
  );
};

GameFieldsContainer.propTypes = {
  sentenceTranslation: PropTypes.string.isRequired,
  isWordFinished: PropTypes.bool,
  isAutoSolve: PropTypes.bool,
  isCheckShow: PropTypes.bool,
  autoSolve: PropTypes.func,
  checkSentence: PropTypes.func,
  switchToNextSentence: PropTypes.func,
};

GameFieldsContainer.defaultProps = {
  isWordFinished: false,
  isAutoSolve: false,
  isCheckShow: false,
  checkSentence: () => {},
  autoSolve: () => {},
  switchToNextSentence: () => {},
};

export default GameFieldsContainer;
