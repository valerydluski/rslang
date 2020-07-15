import { takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { fetchWords } from '../action';
import {
  SPEAKIT_CHANGE_LEVEL,
  SPEAKIT_CHANGE_PAGE,
  SPRINT_CHANGE_PAGE,
  SPRINT_CHANGE_LEVEL,
  SAVANNAH_CHANGE_PAGE,
  SAVANNAH_CHANGE_LEVEL,
  ENGLISHPUZZLE_CHANGE_LEVEL,
  ENGLISHPUZZLE_CHANGE_PAGE,
  AUDIOCALL_CHANGE_LEVEL,
  AUDIOCALL_CHANGE_PAGE,
  MAKESENTENCE_CHANGE_LEVEL,
  MAKESENTENCE_CHANGE_PAGE,
} from '../../ChangeRounds/types';
import { CHANGE_APP_MODE } from '../../AppMode/types';
import { hideLoader, showLoader } from '../../Loader/action';
import wordsFetch from '../../../services/getWordsFromAPI';
import { configureData } from '../../../services/configureEnglishPuzzleData';
import { updateState, updateSource } from '../../EnglishPuzzle/actions';
import { changeIDontKnowWords, changeGameMode } from '../../Games/action';
import getRandomValuesFromArray from '../../../utils/getRandomValuesFromArray';
import { GAME_NAME } from '../../../config';

const getSimilarWords = (payload, appMode, userWords) => {
  if (appMode !== GAME_NAME.audioCall && appMode !== GAME_NAME.savannah) {
    return payload;
  }

  const collection = payload.map((el) => {
    let similar = userWords[0].paginatedResults.filter(
      (element) =>
        el.userWord.optional.partOfSpeechCode === element.userWord.optional.partOfSpeechCode &&
        element.word !== el.word
    );
    similar = Array.from(new Set(similar));
    if (similar.length < 4) {
      payload.forEach((element) => {
        if (
          el.userWord.optional.partOfSpeechCode === element.userWord.optional.partOfSpeechCode &&
          element.word !== el.word
        ) {
          similar.push(element);
        }
      });
    }
    similar = Array.from(new Set(similar));
    if (similar.length > 4) {
      let newsimilar = similar.filter(
        (element) =>
          el.wordTranslate.substr(-2) === element.wordTranslate.substr(-2) &&
          element.word !== el.word
      );
      newsimilar = Array.from(new Set(similar));
      if (newsimilar.length > 4) {
        similar = getRandomValuesFromArray(newsimilar, 3);
        const newEl = el;
        newEl.similarWords = similar.map((elem) => elem.wordTranslate);
        return newEl;
      }
    }
    if (similar.length < 4) {
      const similarWord = similar.map((word) => word.word);
      const restWords = payload.filter(
        (element) => el.word !== element.word && !similarWord.includes(element.word)
      );
      const restCount = 4 - similar.length - 1;
      const newRest = getRandomValuesFromArray(restWords, restCount);
      similar = similar.concat(newRest);
    }
    similar = Array.from(new Set(similar));
    if (similar.length > 4) {
      similar = getRandomValuesFromArray(similar, 3);
    }
    const newEl = el;
    newEl.similarWords = similar.map((elem) => elem.wordTranslate);
    return newEl;
  });
  return collection;
};

function* workerGetWords() {
  try {
    yield put(showLoader());
    const state = yield select();
    yield put(changeIDontKnowWords([]));
    const { appMode } = state.changeAppMode;
    const { gameMode } = state.gamesReducer;
    const userWords = state.userWords.words;
    const wordsPerPage = state.userSettings.settings[`${appMode}WordsPerPage`] || 10;
    let payload;
    if (!gameMode && userWords[0] && userWords[0].paginatedResults.length >= +wordsPerPage) {
      const arr = userWords[0].paginatedResults;
      if (appMode === 'EnglishPuzzle' || appMode === 'MakeSentence') {
        const arrForPuzzle = arr.filter((el) => el.wordsPerExampleSentence <= 10);
        if (arrForPuzzle.length >= 10) {
          if (appMode === 'EnglishPuzzle') {
            payload = getRandomValuesFromArray(arrForPuzzle, 9);
          } else {
            payload = getRandomValuesFromArray(arr, +wordsPerPage - 1);
          }
        } else {
          payload = yield call(wordsFetch, state);
          yield put(changeGameMode(true));
        }
      } else {
        payload = getRandomValuesFromArray(arr, +wordsPerPage - 1);
      }
    } else {
      payload = yield call(wordsFetch, state);
      yield put(changeGameMode(true));
    }
    const collection = getSimilarWords(payload, appMode, userWords);
    yield put(fetchWords(collection));
    if (appMode === 'EnglishPuzzle') {
      const { EnglishPuzzleLevel, EnglishPuzzlePage } = state.changeRound;
      const data = yield call(configureData, payload, EnglishPuzzleLevel, EnglishPuzzlePage);
      yield put(updateState(data));
      yield put(updateSource());
    }
    yield put(hideLoader());
  } catch (e) {
    toast.error('error get words');
    yield put(hideLoader());
    throw new Error(e);
  }
}

export default function* watchGetWords() {
  yield takeLatest(
    [
      SPEAKIT_CHANGE_LEVEL,
      SPEAKIT_CHANGE_PAGE,
      SPRINT_CHANGE_PAGE,
      SPRINT_CHANGE_LEVEL,
      SAVANNAH_CHANGE_PAGE,
      SAVANNAH_CHANGE_LEVEL,
      ENGLISHPUZZLE_CHANGE_LEVEL,
      ENGLISHPUZZLE_CHANGE_PAGE,
      AUDIOCALL_CHANGE_LEVEL,
      AUDIOCALL_CHANGE_PAGE,
      MAKESENTENCE_CHANGE_LEVEL,
      MAKESENTENCE_CHANGE_PAGE,
      CHANGE_APP_MODE,
    ],
    workerGetWords
  );
}
