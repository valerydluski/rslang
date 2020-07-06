import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoToHomePageButton from '../../../containers/Buttons/GoHomePageButton/GoHomePageButton';
import StatusMenu from '../../../components/StatusMenu/StatusMenu';
import { checkStatusSession } from '../../../redux/Auth/Login/actions';
import {
  changeMakeSentenceLevel,
  changeMakeSentencePage,
} from '../../../redux/ChangeRounds/action';
import { GAME_MAX_PAGE } from '../../../config';
import MakeSentenceGame from '../../../containers/MakeSentence/MakeSentenceGame';

const MakeSentence = ({ wordsCollection, updateLevel, updatePage, page, level, maxPage }) => {
  const [words, changeWords] = useState(wordsCollection);

  useEffect(() => {
    changeWords(wordsCollection);
  }, [wordsCollection]);

  checkStatusSession();

  return (
    <div className="make-sentence_container">
      <GoToHomePageButton />
      <StatusMenu
        page={page}
        level={level}
        maxPage={maxPage}
        updateLevel={updateLevel}
        updatePage={updatePage}
      />
      <MakeSentenceGame
        key={`level-${level}/page-${page}`}
        wordsCollection={words}
        maxPage={maxPage}
        page={page}
        level={level}
      />
    </div>
  );
};

MakeSentence.propTypes = {
  wordsCollection: PropTypes.instanceOf(Array),
  updateLevel: PropTypes.func,
  updatePage: PropTypes.func,
  level: PropTypes.string,
  page: PropTypes.string,
  maxPage: PropTypes.number,
};

MakeSentence.defaultProps = {
  wordsCollection: [],
  updatePage: () => {},
  updateLevel: () => {},
  level: '1',
  page: '1',
  maxPage: GAME_MAX_PAGE,
};

const mapStateToProps = (state) => {
  return {
    wordsCollection: state.getWordsFromAPI.wordsFromAPI,
    level: state.changeRound.MakeSentenceLevel,
    page: state.changeRound.MakeSentencePage,
    maxPage: state.maxPage.maxPage,
  };
};

const mapDispatchToProps = {
  updateLevel: changeMakeSentenceLevel,
  updatePage: changeMakeSentencePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSentence);
