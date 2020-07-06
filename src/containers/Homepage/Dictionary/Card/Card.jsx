import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
import {
  updateLearningWords,
  updateDifficultWords,
  updateDeletedWords,
} from '../../../../redux/Dictionary/actions';

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
  } = props;
  const sound = new Audio();

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

  const updateWord = (difficulty) => {
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = difficulty;
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
  };

  const putInDifficult = () => {
    updateList(learningWords, updateLearning);
    updateWord('difficult');
  };

  const deleteFromLearning = () => {
    updateList(learningWords, updateLearning);
    updateWord('deleted');
  };

  const deleteFromDifficult = () => {
    updateList(difficultWords, updateDifficult);
    updateWord('deleted');
  };

  const restoreFromDifficult = () => {
    updateList(difficultWords, updateDifficult);
    updateWord('medium');
  };

  const restoreFromDeleted = () => {
    updateList(deletedWords, updateDeleted);
    updateWord('medium');
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
            <Button onClick={putInDifficult}>
              <Icon src={difficultIco} />
            </Button>
            <Button onClick={deleteFromLearning}>
              <Icon src={trashIco} />
            </Button>
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
            <Button onClick={deleteFromDifficult}>
              <Icon src={trashIco} />
            </Button>
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
      <Left>
        <Image src={`${LINK_FOR_IMAGE}${item.image}`} className="small-img" />
      </Left>
      <Center>
        <p>{item.word}</p>
        <p>{item.textExample.replace(/<\w+>|<\/\w+>/g, '')}</p>
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
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
    learningWords: state.dictionary.learningWords,
    difficultWords: state.dictionary.difficultWords,
    deletedWords: state.dictionary.deletedWords,
  };
};

const mapDispatchToProps = {
  updateLearning: updateLearningWords,
  updateDifficult: updateDifficultWords,
  updateDeleted: updateDeletedWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
