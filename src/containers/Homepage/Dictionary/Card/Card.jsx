import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import StyledCard from './Styled/StyledCard';
import Left from './Styled/Left';
import Center from './Styled/Center';
import Right from './Styled/Right';
import { LINK_FOR_AUDIO, LINK_FOR_IMAGE } from '../../../../config';
import updateOneWord from '../../../../services/updateOneWord';
import Image from '../../../../components/UI/Image/Image';
import Icon from '../../../../components/UI/Icon/Icon';
import speechIcoGray from '../../../../components/UI/Icon/speechIcoGray.svg';
import trashIco from '../../../../components/UI/Icon/trashIco.svg';
import difficultIco from '../../../../components/UI/Icon/difficultIco.svg';
import restoreIco from '../../../../components/UI/Icon/restoreIco.svg';
import Button from '../../../../components/UI/Button/Styled/StyledPuzzleRoundWhiteButton';
import ProgressBar from '../../../../components/UI/ProgressBar/ProgressBar';
import {
  updateLearningWords,
  updateDifficultWords,
  updateDeletedWords,
} from '../../../../redux/Dictionary/actions';

const dateOptions = {
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
};

function Card(props) {
  const {
    item,
    user,
    type,
    learningWords,
    difficultWords,
    deletedWords,
    updateLearning,
    updateDifficult,
    updateDeleted,
    isTranslate,
    isTextMeaning,
    isTextExample,
    isTranscription,
    isImageAssociation,
    difficultBtn,
    deletedBtn,
    lang,
  } = props;
  const sound = new Audio();
  const prevRepeat = new Date(item.userWord.optional.time);
  const nextRepeat = new Date(item.userWord.optional.nextRepeat);

  const play = () => {
    sound.src = `${LINK_FOR_AUDIO}${item.audio}`;
    sound.load();
    sound.play();
  };

  const updateList = (arr, action) => {
    const list = [...arr];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    action(list);
  };

  const updateWord = (isDifficult, isDeleted) => {
    const wordOptions = { ...item.userWord };
    wordOptions.optional.difficult = isDifficult;
    wordOptions.optional.deleted = isDeleted;
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
  };

  const putInDifficult = () => {
    updateList(learningWords, updateLearning);
    updateWord(true, false);
  };

  const deleteFromLearning = () => {
    updateList(learningWords, updateLearning);
    updateWord(false, true);
  };

  const deleteFromDifficult = () => {
    updateList(difficultWords, updateDifficult);
    updateWord(true, true);
  };

  const restoreFromDifficult = () => {
    updateList(difficultWords, updateDifficult);
    updateWord(false, false);
  };

  const restoreFromDeleted = () => {
    updateList(deletedWords, updateDeleted);
    updateWord(false, false);
  };

  const controls = () => {
    let container;
    switch (type) {
      case 'learning':
        container = (
          <Right>
            <Button onClick={play}>
              <Icon src={speechIcoGray} />
            </Button>
            {difficultBtn ? (
              <Button onClick={putInDifficult}>
                <Icon src={difficultIco} />
              </Button>
            ) : null}
            {deletedBtn ? (
              <Button onClick={deleteFromLearning}>
                <Icon src={trashIco} />
              </Button>
            ) : null}
          </Right>
        );
        break;
      case 'difficult':
        container = (
          <Right>
            <Button onClick={play}>
              <Icon src={speechIcoGray} />
            </Button>
            <Button onClick={restoreFromDifficult}>
              <Icon src={restoreIco} />
            </Button>
            {deletedBtn ? (
              <Button onClick={deleteFromDifficult}>
                <Icon src={trashIco} />
              </Button>
            ) : null}
          </Right>
        );
        break;
      case 'deleted':
        container = (
          <Right>
            <Button onClick={play}>
              <Icon src={speechIcoGray} />
            </Button>
            <Button onClick={restoreFromDeleted}>
              <Icon src={restoreIco} />
            </Button>
          </Right>
        );
        break;
      default:
        break;
    }
    return container;
  };

  return (
    <StyledCard>
      <Left isImageAssociation={isImageAssociation}>
        <Image src={`${LINK_FOR_IMAGE}${item.image}`} className="small-img" />
      </Left>
      <Center>
        <ProgressBar difficulty={item.userWord.difficulty} />
        <p className="word">
          {item.word}
          {isTranslate ? <span> - {item.wordTranslate}</span> : null}
        </p>
        {isTranscription ? <p className="additional">{item.transcription}</p> : null}
        {isTextMeaning ? (
          <p className="additional">{item.textMeaning.replace(/<\w+>|<\/\w+>/g, '')}</p>
        ) : null}
        {isTextExample ? (
          <p className="additional">{item.textExample.replace(/<\w+>|<\/\w+>/g, '')}</p>
        ) : null}
        <p className="info">
          <Translate value="Dictionary.repeats" />: {item.userWord.optional.repeats}
        </p>
        <p className="info">
          <Translate value="Dictionary.prevRepeat" />:{' '}
          {prevRepeat.toLocaleString(lang, dateOptions)}
        </p>
        <p className="info">
          <Translate value="Dictionary.nextRepeat" />:{' '}
          {nextRepeat.toLocaleString(lang, dateOptions)}
        </p>
      </Center>
      {controls()}
    </StyledCard>
  );
}

Card.propTypes = {
  item: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object),
  type: PropTypes.string,
  learningWords: PropTypes.instanceOf(Array),
  difficultWords: PropTypes.instanceOf(Array),
  deletedWords: PropTypes.instanceOf(Array),
  updateLearning: PropTypes.func,
  updateDifficult: PropTypes.func,
  updateDeleted: PropTypes.func,
  isTranslate: PropTypes.bool,
  isTextMeaning: PropTypes.bool,
  isTextExample: PropTypes.bool,
  isTranscription: PropTypes.bool,
  isImageAssociation: PropTypes.bool,
  difficultBtn: PropTypes.bool,
  deletedBtn: PropTypes.bool,
  lang: PropTypes.string,
};

Card.defaultProps = {
  item: {},
  user: {},
  type: '',
  learningWords: [],
  difficultWords: [],
  deletedWords: [],
  updateLearning: () => {},
  updateDifficult: () => {},
  updateDeleted: () => {},
  isTranslate: false,
  isTextMeaning: false,
  isTextExample: false,
  isTranscription: false,
  isImageAssociation: false,
  difficultBtn: true,
  deletedBtn: true,
  lang: 'en',
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
    learningWords: state.dictionary.learningWords,
    difficultWords: state.dictionary.difficultWords,
    deletedWords: state.dictionary.deletedWords,
    isTranslate: state.userSettings.settings.isTranslate,
    isTextMeaning: state.userSettings.settings.isTextMeaning,
    isTextExample: state.userSettings.settings.isTextExample,
    isTranscription: state.userSettings.settings.isTranscription,
    isImageAssociation: state.userSettings.settings.isImageAssociation,
    difficultBtn: state.userSettings.settings.isDictionaryDifficultButton,
    deletedBtn: state.userSettings.settings.isDictionaryDeletedButton,
    lang: state.i18n.locale,
  };
};

const mapDispatchToProps = {
  updateLearning: updateLearningWords,
  updateDifficult: updateDifficultWords,
  updateDeleted: updateDeletedWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
