import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StatusMenu from '../../../containers/EnglishPuzzle/Menu/StatusMenu/StatusMenu';
import TipsMenu from '../../../containers/EnglishPuzzle/Menu/TipsMenu/TipsMenu';
import Game from '../../../containers/EnglishPuzzle/Game/Game';
import Info from '../../../components/EnglishPuzzle/Info/Info';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import changeAppMode from '../../../redux/AppMode/action';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
        <TipsMenu />
        <Game />
        <Info />
      </Container>
    </Content>
    // TODO add controls
    // TODO add results window
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
