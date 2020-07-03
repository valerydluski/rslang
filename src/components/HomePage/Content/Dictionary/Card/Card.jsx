import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './Styled/StyledCard';
import Left from './Styled/Left';
import Center from './Styled/Center';
import Right from './Styled/Right';
import { LINK_FOR_AUDIO, LINK_FOR_IMAGE } from '../../../../../config';
import Image from '../../../../UI/Image/Image';
import Icon from '../../../../UI/Icon/Icon';
import speechIcoBlack from '../../../../UI/Icon/speechIcoBlack.svg';
import trashIco from '../../../../UI/Icon/trashIco.svg';
import putInCloudico from '../../../../UI/Icon/putInCloudIco.svg';
import Button from '../../../../UI/Button/Styled/StyledPuzzleRoundWhiteButton';

function Card(props) {
  const { _id, word, image, audio, textExample } = props;
  const sound = new Audio();

  const play = () => {
    sound.src = `${LINK_FOR_AUDIO}${audio}`;
    sound.load();
    sound.play();
  };

  return (
    <StyledCard>
      <Left>
        <Image src={`${LINK_FOR_IMAGE}${image}`} className="small-img" />
      </Left>
      <Center>
        <p>{word}</p>
        <p>{textExample}</p>
      </Center>
      <Right>
        <Button onClick={play}>
          <Icon src={speechIcoBlack} />
        </Button>
        <Button onClick={play}>
          <Icon src={putInCloudico} />
        </Button>
        <Button>
          <Icon src={trashIco} />
        </Button>
      </Right>
    </StyledCard>
  );
}

Card.propTypes = {
  _id: PropTypes.string,
  word: PropTypes.string,
  image: PropTypes.string,
  audio: PropTypes.string,
  textExample: PropTypes.string,
};

Card.defaultProps = {
  _id: '',
  word: '',
  image: '',
  audio: '',
  textExample: '',
};

export default Card;
