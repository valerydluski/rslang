import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import SavannahContainerStyled from './Styled/SavannahContainerStyled';
import SavannaGameContainer from '../../../containers/Savannah/SavannahGameContainer';

const Savannah = ({ wordsCollection, page, level }) => {
  const [words, changeWords] = useState(wordsCollection);
  const [isMoveBackground, moveBackground] = useState(false);

  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  return (
    <SavannahContainerStyled className={isMoveBackground ? 'movingBackground' : ''}>
      <GoToHomePageButton />
      <SavannaGameContainer
        key={`level-${level}:page-${page}`}
        wordsCollection={words}
        level={level}
        page={page}
        moveBackground={moveBackground}
      />
    </SavannahContainerStyled>
  );
};

Savannah.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  level: PropTypes.string,
  page: PropTypes.string,
};

Savannah.defaultProps = {
  wordsCollection: [],
  level: '1',
  page: '1',
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    level: state.changeRound.SavannahLevel,
    page: state.changeRound.SavannahPage,
  };
};

export default connect(mapStateToProps)(Savannah);
