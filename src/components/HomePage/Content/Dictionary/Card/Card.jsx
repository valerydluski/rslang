import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledCard from './Styled/StyledCard';
import Left from './Styled/Left';
import Center from './Styled/Center';
import Right from './Styled/Right';
import { LINK_FOR_AUDIO, LINK_FOR_IMAGE } from '../../../../../config';
import updateOneWord from '../../../../../services/updateOneWord';
import Image from '../../../../UI/Image/Image';
import Icon from '../../../../UI/Icon/Icon';
import speechIcoBlack from '../../../../UI/Icon/speechIcoBlack.svg';
import trashIco from '../../../../UI/Icon/trashIco.svg';
import putInCloudIco from '../../../../UI/Icon/putInCloudIco.svg';
import restoreIco from '../../../../UI/Icon/restoreIco.svg';
import Button from '../../../../UI/Button/Styled/StyledPuzzleRoundWhiteButton';
import {
  updateLearningWords,
  updateDifficultWords,
  updateDeletedWords,
} from '../../../../../redux/Dictionary/actions';

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

  const putInDifficult = () => {
    const list = [...learningWords];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'difficult';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
    updateLearning(list);
  };

  const deleteFromLearning = () => {
    const list = [...learningWords];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'deleted';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
    updateLearning(list);
  };

  const deleteFromDifficult = () => {
    const list = [...difficultWords];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'deleted';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
    updateDifficult(list);
  };

  const restoreFromDifficult = () => {
    const list = [...difficultWords];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'medium';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
    updateDifficult(list);
  };

  const restoreFromDeleted = () => {
    const list = [...deletedWords];
    const index = list.findIndex((word) => word === item);
    list.splice(index, 1);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'medium';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
    updateDeleted(list);
  };

  const controls = () => {
    let container;
    switch (type) {
      case 'learning':
        container = (
          <Right>
            <Button onClick={play}>
              <Icon src={speechIcoBlack} />
            </Button>
            <Button onClick={putInDifficult}>
              <Icon src={putInCloudIco} />
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
              <Icon src={speechIcoBlack} />
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
              <Icon src={speechIcoBlack} />
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
