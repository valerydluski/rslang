import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { I18n } from 'react-redux-i18n';
import { connect } from 'react-redux';
import OverlayStyled from './Styled/OverlayStyled';
import ModalStyled from './Styled/ModalStyled';
import ModalContent from './ModalContent';
import Image from '../../components/UI/Image/Image';
import ModalButtonsContainerStyled from './Styled/ModalButtonsContainerStyled';
import Button from '../../components/UI/Button/Button';
import GoToHomePageButton from '../Buttons/GoHomePageButton/GoHomePageButton';
import { LINK_FOR_IMAGE, LINK_FOR_AUDIO } from '../../config';
import createStatisticForGames from '../../utils/createStatisticForGames';
import StatisticsHeader from '../../components/Modal/Statistics/StatisticsHeader';
import RoundStatistic from './Statistic/RoundStatistic';
import { fetchOldWords } from '../../redux/GetWordsFromAPI/action';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ModalResult = (props) => {
  const {
    imageSrc,
    showProperties,
    audioForPlay,
    isChangeImage,
    restartGame,
    newGame,
    correctWords,
    Statistic,
    currentAppMode,
    getOldGameWords,
    loading,
    gameMode,
  } = props;

  const [srcForImage, setSrcForImage] = useState(imageSrc);
  const [isShowStatistic, toogleIsShowStatistic] = useState(false);
  const [roundsStatistic, setRoundsStatistic] = useState([]);
  const [isOldResult, toogleIsOldResult] = useState(false);
  if (loading) {
    return (
      <OverlayStyled id="overlay">
        <GoToHomePageButton />
        <ModalStyled>
          <LoadingSpinner />
        </ModalStyled>
      </OverlayStyled>
    );
  }

  const restartHandler = () => {
    restartGame();
  };

  const wordAudio = new Audio();

  const playAudio = (src) => {
    wordAudio.src = `${LINK_FOR_AUDIO}${src}`;
    wordAudio.load();
    wordAudio.play();
  };

  const newGameHandler = () => {
    newGame();
  };

  const wordHandler = (obj) => {
    if (isChangeImage) setSrcForImage(`${LINK_FOR_IMAGE}${obj.image}`);
    if (audioForPlay) {
      playAudio(obj[audioForPlay]);
    }
  };

  const showStatisticHandler = () => {
    toogleIsShowStatistic(true);
    setRoundsStatistic(createStatisticForGames(Statistic, currentAppMode));
  };

  const roundHandler = (level, page, correctAnswers, count) => {
    getOldGameWords({ level, page, correctAnswers, count });
    toogleIsOldResult(true);
  };

  const backHandler = () => {
    toogleIsShowStatistic(false);
    toogleIsOldResult(false);
  };
  const showContent = () => {
    if (isShowStatistic && isOldResult) {
      return (
        <>
          <Image src={srcForImage} className="small-img" />
          <ModalContent
            showProperties={showProperties}
            wordHandler={wordHandler}
            correctWords={correctWords}
            audioForPlay={audioForPlay}
            isOldResult={isOldResult}
          />
          <ModalButtonsContainerStyled>
            <Button buttonHandler={restartHandler} text={I18n.t('Buttons.restart')} />
            <Button buttonHandler={newGameHandler} text={I18n.t('Buttons.newGame')} />
            <Button buttonHandler={backHandler} text={I18n.t('Buttons.back')} />
          </ModalButtonsContainerStyled>
        </>
      );
    }
    if (isShowStatistic) {
      return (
        <>
          <StatisticsHeader />
          {roundsStatistic.map((round) => (
            <RoundStatistic key={round} data={round} roundHandler={roundHandler} />
          ))}
          <ModalButtonsContainerStyled>
            <Button buttonHandler={restartHandler} text={I18n.t('Buttons.restart')} />
            <Button buttonHandler={newGameHandler} text={I18n.t('Buttons.newGame')} />
            <Button buttonHandler={backHandler} text={I18n.t('Buttons.back')} />
          </ModalButtonsContainerStyled>
        </>
      );
    }
    return (
      <>
        <Image src={srcForImage} className="small-img" />
        <ModalContent
          showProperties={showProperties}
          wordHandler={wordHandler}
          correctWords={correctWords}
          audioForPlay={audioForPlay}
          isOldResult={isOldResult}
        />
        <ModalButtonsContainerStyled>
          <Button buttonHandler={restartHandler} text={I18n.t('Buttons.restart')} />
          <Button buttonHandler={newGameHandler} text={I18n.t('Buttons.newGame')} />
          {gameMode ? (
            <Button buttonHandler={showStatisticHandler} text={I18n.t('Buttons.statistic')} />
          ) : null}
        </ModalButtonsContainerStyled>
      </>
    );
  };

  return (
    <OverlayStyled id="overlay">
      <GoToHomePageButton />
      <ModalStyled>{showContent()}</ModalStyled>
    </OverlayStyled>
  );
};

ModalResult.propTypes = {
  imageSrc: PropTypes.string,
  showProperties: PropTypes.instanceOf(Array),
  audioForPlay: PropTypes.string,
  isChangeImage: PropTypes.bool,
  restartGame: PropTypes.func,
  newGame: PropTypes.func,
  correctWords: PropTypes.instanceOf(Array),
  Statistic: PropTypes.instanceOf(Object).isRequired,
  currentAppMode: PropTypes.string.isRequired,
  getOldGameWords: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  gameMode: PropTypes.bool.isRequired,
};

ModalResult.defaultProps = {
  imageSrc: 'https://raw.githubusercontent.com/valerydluski/Images/master/blank.jpg',
  showProperties: ['word'],
  audioForPlay: '',
  isChangeImage: true,
  correctWords: null,
  restartGame: () => {},
  newGame: () => {},
};

const mapStateToProps = (state) => {
  return {
    Statistic: state.changeStatistic.statistic,
    currentAppMode: state.changeAppMode.appMode,
    loading: state.loadOldGameWords.loadingOldGame,
    gameMode: state.gamesReducer.gameMode,
  };
};

const mapDispatchToProps = {
  getOldGameWords: fetchOldWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalResult);
