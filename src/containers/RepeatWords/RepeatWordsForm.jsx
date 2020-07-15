import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Line } from 'rc-progress';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import StyledRoundButton from '../../components/UI/Button/Styled/StyledRoundButton';
import StyledButton from '../../components/UI/Button/Styled/StyledButton';
import { LINK_FOR_IMAGE } from '../../config';
import RepeatWordsInput from './RepeatWordsInput';
import Image from '../../components/UI/Image/Image';
import Transcription from '../../components/UI/TextField/Transcription';
import RepeatFormStyled from './Styled/RepeatFormStyled';
import RepeatCardsContainer, {
  TranslateStyled,
  TextExampleStyled,
  TextExampleTranslateStyled,
  TextMeaningStyled,
  TextMeaningTranslateStyled,
  TopContentStyled,
  CenterContentStyled,
  BottomContentStyled,
} from './Styled/RepeatCardsContainer';
import RepeatButtonsContainer, {
  ButtonsRow,
  ProgressBarCount,
  ProgressBarContainer,
} from './Styled/RepeatButtonsContainer';
import { showResult } from '../../redux/RepeatWords/actions';

const LearnWordsForm = (props) => {
  const {
    handleSubmit,
    word,
    isCorrect,
    autocomplete,
    reset,
    settings,
    isTranslationShow,
    onSubmit,
    isRightAnswerShow,
    answer,
    isResultShow,
    wordsCount,
    currentWordIndex,
    audiosDuration,
    showButtons,
    isShowResult,
    showResultHander,
    isInputActive,
    isSoundPlay,
  } = props;

  const {
    isTranslate,
    isTextMeaning,
    isTextExample,
    isTranscription,
    isImageAssociation,
  } = settings.settings;

  const {
    textExample,
    textExampleTranslate,
    textMeaning,
    image,
    wordTranslate,
    transcription,
    textMeaningTranslate,
  } = word;

  const [firstPart, secondPart] = textExample;

  useEffect(() => {
    if (isCorrect) {
      reset('wordLearn');
    }
  }, [isCorrect, reset]);

  const customHandleSubmit = (type) => {
    return () => {
      onSubmit({
        buttonType: type,
      });
    };
  };

  const textMeaningFormatted = textMeaning.replace(/<i>|<\/i>/g, ``);
  const wordRegExp = new RegExp(`${word.word}`, 'i');
  return (
    <RepeatFormStyled
      onSubmit={handleSubmit((values) =>
        onSubmit({
          ...values,
          buttonType: 'form_enter',
        })
      )}
    >
      <RepeatCardsContainer>
        <StyledRoundButton
          onClick={customHandleSubmit('sound')}
          type="button"
          className={!isSoundPlay ? 'learn_sound-button not-active' : 'learn_sound-button'}
        />
        <TopContentStyled>
          {isTranslationShow && isTranslate && <TranslateStyled>{wordTranslate}</TranslateStyled>}
          {isImageAssociation && (
            <Image
              alt={word.word}
              src={`${LINK_FOR_IMAGE}${image}`}
              classNameContainer="image_learn"
            />
          )}
        </TopContentStyled>
        <CenterContentStyled>
          {isTextExample && <TextExampleStyled>{firstPart}</TextExampleStyled>}
          <Field
            name="word"
            key="word"
            type="text"
            placeholder={isRightAnswerShow ? word.word : ''}
            size="5"
            component={RepeatWordsInput}
            autocomplete={autocomplete}
            word={word.word}
            answer={answer}
            isShowResult={isResultShow}
            audiosDuration={audiosDuration}
            isInputActive={isInputActive}
            onChange={() => {
              if (isShowResult) {
                showResultHander(false);
              }
            }}
          />
          {isTextExample && <TextExampleStyled>{secondPart}</TextExampleStyled>}
        </CenterContentStyled>
        <BottomContentStyled>
          {isTranslationShow && isTranslate && (
            <TextExampleTranslateStyled>{textExampleTranslate}</TextExampleTranslateStyled>
          )}
          {isTranslationShow && isTranscription && <Transcription transcription={transcription} />}
          {isTextMeaning && isTranslationShow ? (
            <TextMeaningStyled>{textMeaningFormatted}</TextMeaningStyled>
          ) : (
            <TextMeaningStyled>
              {textMeaningFormatted.replace(wordRegExp, '*'.repeat(word.word.length))}
            </TextMeaningStyled>
          )}
          {isTranslationShow && isTextMeaning && (
            <TextMeaningTranslateStyled>{textMeaningTranslate}</TextMeaningTranslateStyled>
          )}
        </BottomContentStyled>
      </RepeatCardsContainer>
      <RepeatButtonsContainer>
        <ButtonsRow>
          {!showButtons && isInputActive && (
            <StyledButton className="button-next">
              <Translate value="Buttons.check" />
            </StyledButton>
          )}
          {showButtons && (
            <>
              <StyledButton onClick={customHandleSubmit('easy')} type="button">
                <Translate value="Buttons.easy" />
              </StyledButton>
              <StyledButton onClick={customHandleSubmit('simply')} type="button">
                <Translate value="Buttons.simply" />
              </StyledButton>
              <StyledButton onClick={customHandleSubmit('medium')} type="button">
                <Translate value="Buttons.medium" />
              </StyledButton>
              <StyledButton onClick={customHandleSubmit('difficult')} type="button">
                <Translate value="Buttons.difficult" />
              </StyledButton>
              <StyledButton onClick={customHandleSubmit('hard')} type="button">
                <Translate value="Buttons.hard" />
              </StyledButton>
              <StyledButton className="button-next" onClick={customHandleSubmit('repeat')}>
                <Translate value="Buttons.repeat" />
              </StyledButton>
            </>
          )}
        </ButtonsRow>
        <ButtonsRow>
          <ProgressBarCount>{currentWordIndex}</ProgressBarCount>
          <ProgressBarContainer>
            <Line
              percent={Math.round((currentWordIndex / wordsCount) * 100)}
              strokeWidth="3"
              trailWidth="2"
              strokeColor="#404497"
            />
          </ProgressBarContainer>
          <ProgressBarCount>{wordsCount}</ProgressBarCount>
        </ButtonsRow>
      </RepeatButtonsContainer>
    </RepeatFormStyled>
  );
};

const ReduxLearnWordsForm = reduxForm({
  form: 'wordLearn',
})(LearnWordsForm);

LearnWordsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  word: PropTypes.shape({
    textExample: PropTypes.instanceOf(Array).isRequired,
    textExampleTranslate: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    textMeaning: PropTypes.string.isRequired,
    wordTranslate: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    transcription: PropTypes.string.isRequired,
    textMeaningTranslate: PropTypes.string.isRequired,
  }).isRequired,
  settings: PropTypes.shape({
    settings: PropTypes.shape({
      isTranslate: PropTypes.bool.isRequired,
      isTextMeaning: PropTypes.bool.isRequired,
      isTextExample: PropTypes.bool.isRequired,
      isTranscription: PropTypes.bool.isRequired,
      isImageAssociation: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  isCorrect: PropTypes.bool.isRequired,
  isShowResult: PropTypes.bool.isRequired,
  isSoundPlay: PropTypes.bool.isRequired,
  isTranslationShow: PropTypes.bool.isRequired,
  autocomplete: PropTypes.string,
  reset: PropTypes.func.isRequired,
  showResultHander: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isRightAnswerShow: PropTypes.bool.isRequired,
  answer: PropTypes.string,
  isResultShow: PropTypes.bool,
  showButtons: PropTypes.bool.isRequired,
  isInputActive: PropTypes.bool.isRequired,
  wordsCount: PropTypes.number,
  currentWordIndex: PropTypes.number,
  audiosDuration: PropTypes.number.isRequired,
};

LearnWordsForm.defaultProps = {
  autocomplete: 'off',
  answer: '',
  isResultShow: false,
  wordsCount: 0,
  currentWordIndex: 0,
};

const mapStateToProps = (state) => {
  return {
    isShowResult: state.repeatWords.showResult,
  };
};

const mapDispatchToProps = {
  showResultHander: showResult,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxLearnWordsForm);
