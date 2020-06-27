import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Content from './Styled/Content';
import Container from './Styled/Container';
import Main from './Styled/Main';
import StatusMenu from '../../../containers/EnglishPuzzle/Menu/StatusMenu/StatusMenu';
import TipsMenu from '../../../containers/EnglishPuzzle/Menu/TipsMenu/TipsMenu';
import Game from '../../../containers/EnglishPuzzle/Game/Game';
import Info from '../../../components/EnglishPuzzle/Info/Info';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import changeAppMode from '../../../redux/AppMode/action';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';

const EnglishPuzzle = (props) => {
  const { isWordsLoading, currentAppMode, switchAppMode } = props;

  if (isWordsLoading) return <LoadingSpinner />;

  if (currentAppMode !== 'EnglishPuzzle') {
    switchAppMode('EnglishPuzzle');
  }

  return (
    <Content>
      <GoToHomePageButton />
      <Container>
        <StatusMenu />
        <Main>
          <Game />
          <TipsMenu />
        </Main>
        <Info />
      </Container>
    </Content>
  );
};

EnglishPuzzle.propTypes = {
  switchAppMode: PropTypes.func.isRequired,
  isWordsLoading: PropTypes.bool,
  currentAppMode: PropTypes.string.isRequired,
};

EnglishPuzzle.defaultProps = {
  isWordsLoading: false,
};

const mapStateToProps = (state) => {
  return {
    isWordsLoading: state.loader.loading,
    currentAppMode: state.changeAppMode.appMode,
  };
};

const mapDispatchToProps = {
  switchAppMode: changeAppMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(EnglishPuzzle);
