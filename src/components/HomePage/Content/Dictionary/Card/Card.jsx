import React, { useState } from 'react';
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
import trashIcoRed from '../../../../UI/Icon/trashIcoRed.svg';
import putInCloudIco from '../../../../UI/Icon/putInCloudIco.svg';
import putInCloudIcoRed from '../../../../UI/Icon/putInCloudIcoRed.svg';
import restoreIco from '../../../../UI/Icon/restoreIco.svg';
import restoreIcoRed from '../../../../UI/Icon/restoreIcoRed.svg';
import Button from '../../../../UI/Button/Styled/StyledPuzzleRoundWhiteButton';

function Card(props) {
  const [isDeleted, switchDeleted] = useState(false);
  const [isMoveInDifficult, switchDifficult] = useState(false);
  const [isRestored, switchRestored] = useState(false);

  const { item, user, type } = props;
  const sound = new Audio();

  const play = () => {
    sound.src = `${LINK_FOR_AUDIO}${item.audio}`;
    sound.load();
    sound.play();
  };

  const putInDifficult = () => {
    switchDifficult(true);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'difficult';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
  };

  const putInDeleted = () => {
    switchDeleted(true);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'deleted';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
  };

  const restore = () => {
    switchRestored(true);
    const wordOptions = { ...item.userWord };
    wordOptions.difficulty = 'medium';
    // eslint-disable-next-line no-underscore-dangle
    updateOneWord(item._id, wordOptions, user);
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
              <Icon src={isMoveInDifficult ? putInCloudIcoRed : putInCloudIco} />
            </Button>
            <Button onClick={putInDeleted}>
              <Icon src={isDeleted ? trashIcoRed : trashIco} />
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
            <Button onClick={restore}>
              <Icon src={isRestored ? restoreIcoRed : restoreIco} />
            </Button>
            <Button onClick={putInDeleted}>
              <Icon src={isDeleted ? trashIcoRed : trashIco} />
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
            <Button onClick={restore}>
              <Icon src={isRestored ? restoreIcoRed : restoreIco} />
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
        <p>{item.textExample}</p>
      </Center>
      {controls()}
    </StyledCard>
  );
}

Card.propTypes = {
  item: PropTypes.instanceOf(Object),
  user: PropTypes.instanceOf(Object),
  type: PropTypes.string,
};

Card.defaultProps = {
  item: {},
  user: {},
  type: '',
};

const mapStateToProps = (state) => {
  return {
    user: state.login,
  };
};

export default connect(mapStateToProps, null)(Card);
