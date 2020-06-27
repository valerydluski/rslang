import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import speechIcon from '../../../components/UI/Icon/speechIcoBlack.svg';
import Icon from '../../../components/UI/Icon/Icon';
import Button from '../../../components/UI/Button/Styled/StyledPuzzleRoundWhiteButton';
import Container from './Styled/Container';
import Text from './Styled/Text';

class Translation extends Component {
  componentDidUpdate() {
    const { autoSpeech, isRowCorrect } = this.props;
    if ((autoSpeech && !isRowCorrect) || (!autoSpeech && isRowCorrect)) {
      this.play();
    }
  }

  onClick = () => {
    this.play();
  };

  play = () => {
    const { audios, row } = this.props;
    const sound = audios[row];
    if (row !== 0) {
      audios[row - 1].pause();
    }
    sound.play();
  };

  renderButton() {
    const { speech, isRowCorrect } = this.props;
    if (speech || (!speech && isRowCorrect)) {
      return (
        <Button onClick={this.onClick}>
          <Icon src={speechIcon} />
        </Button>
      );
    }
    return null;
  }

  renderText() {
    const { translation, translations, row, isRowCorrect } = this.props;
    if (translation || (!translation && isRowCorrect)) {
      return <Text>{translations[row]}</Text>;
    }
    return null;
  }

  render() {
    const { isPageFill } = this.props;
    if (isPageFill) {
      return null;
    }
    return (
      <Container>
        {this.renderButton()}
        {this.renderText()}
      </Container>
    );
  }
}

Translation.propTypes = {
  row: PropTypes.number.isRequired,
  audios: PropTypes.arrayOf(PropTypes.instanceOf(Audio)).isRequired,
  translations: PropTypes.arrayOf(PropTypes.string).isRequired,
  autoSpeech: PropTypes.bool.isRequired,
  translation: PropTypes.bool.isRequired,
  speech: PropTypes.bool.isRequired,
  isRowCorrect: PropTypes.bool.isRequired,
  isPageFill: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    row: state.englishPuzzle.row,
    translations: state.englishPuzzle.translations,
    audios: state.englishPuzzle.audios,
    autoSpeech: state.englishPuzzle.autoSpeech,
    translation: state.englishPuzzle.translation,
    speech: state.englishPuzzle.speech,
    isRowCorrect: state.englishPuzzle.isRowCorrect,
    isPageFill: state.englishPuzzle.isPageFill,
  };
}

export default connect(mapStateToProps, null)(Translation);
