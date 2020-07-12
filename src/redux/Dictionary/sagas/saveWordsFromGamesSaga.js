import { select, takeLatest, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { SAVE_WORDS_FROM_GAMES } from '../types';
import { saveOneUserWords } from '../actions';
import saveOneWord from '../../../services/saveOneWord';
import updateOneWord from '../../../services/updateOneWord';

function* saveUserWordsFromGamesSagaWorker({ payload }) {
  try {
    const { wordsCollection, wrongWordsState } = payload;
    const getUserWords = (state) => state.userWords.words;
    const getLoginState = (state) => state.login;
    const userData = yield select(getLoginState);
    const words = yield select(getUserWords);
    const userWords = words[0].paginatedResults;
    yield all(
      wordsCollection.map((element) => {
        // eslint-disable-next-line no-underscore-dangle
        const word = userWords.find((item) => item.id === element.id || item._id === element.id);
        if (word) {
          if (wrongWordsState.find((item) => item.toLowerCase() === word.word.toLowerCase())) {
            const config = word.userWord;
            config.optional.nextRepeat = new Date().valueOf();
            config.optional.time = new Date().valueOf();
            config.optional.repeats = +config.optional.repeats + 1;
            updateOneWord(element.id, config, userData);
          } else {
            const config = word.userWord;
            config.optional.time = new Date().valueOf();
            config.optional.repeats = +config.optional.repeats + 1;
            updateOneWord(element.id, config, userData);
          }
        } else {
          const config = {
            difficulty: 'new',
            optional: {
              time: new Date().valueOf(),
              deleted: false,
              difficult: false,
              nextRepeat: new Date().valueOf(),
              repeats: 1,
              partOfSpeechCode: element.partOfSpeechCode,
            },
          };
          const elForStore = element;
          elForStore.userWord = config;
          words[0].paginatedResults = words[0].paginatedResults.concat(elForStore);
          saveOneUserWords(words);
          // eslint-disable-next-line no-underscore-dangle
          saveOneWord(element.id || element._id, config, userData, element.word);
        }
        return element;
      })
    );
  } catch (error) {
    toast.error('error define max page');
  }
}

export default function* saveUserWordsFromGamesSagaWatcher() {
  yield takeLatest(SAVE_WORDS_FROM_GAMES, saveUserWordsFromGamesSagaWorker);
}
