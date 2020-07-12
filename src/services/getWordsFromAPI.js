import { API } from '../config';
import fetchData from '../utils/fetchData';
import getPartOfSpeechCode from './getPartOfSpeechCode';

const {
  URL,
  ENDPOINTS: { WORDS },
  QUERIES: {
    WORDS: { GROUP, PAGE, WORDS_PER_SENTENCE, WORDS_PER_PAGE },
  },
} = API;
const fixNumberForLink = 1;
const wordsPerSentenceGames = 100;
const wordsPerSentencePuzzle = 10;

const createData = ({ changeRound, changeAppMode, userSettings }) => {
  const { appMode } = changeAppMode;
  const gameWordsPerPage = userSettings.settings[`${appMode}WordsPerPage`];
  const gameLevel = changeRound[`${appMode}Level`];
  const gamePage = changeRound[`${appMode}Page`];
  const linkLevel = `${GROUP}=${gameLevel - fixNumberForLink}`;
  const linkPage = `${PAGE}=${gamePage - fixNumberForLink}`;
  let wordsPerSentence;
  let wordsPerPage;
  if (appMode === 'EnglishPuzzle' || appMode === 'MakeSentence') {
    wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentencePuzzle}`;
    wordsPerPage = `${WORDS_PER_PAGE}=${wordsPerSentencePuzzle}`;
  } else {
    wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentenceGames}`;
    wordsPerPage = `${WORDS_PER_PAGE}=${gameWordsPerPage}`;
  }
  return {
    linkLevel,
    linkPage,
    wordsPerSentence,
    wordsPerPage,
  };
};
async function getPartOfSpeechCodeForAllWords(el) {
  const word = { ...el };
  const data = await getPartOfSpeechCode(word.word);
  const { partOfSpeechCode } = data[0].meanings[0];
  word.PartOfSpeechCode = partOfSpeechCode;
  return word;
}

async function wordsFetch(state) {
  try {
    if (state.changeAppMode.appMode === 'MainPage') return [];
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(state);
    const link = `${URL}/${WORDS}?${linkLevel}&${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    const arr = await fetchData(link);
    const promises = [];
    arr.forEach((element) => {
      promises.push(getPartOfSpeechCodeForAllWords(element));
    });
    const results = await Promise.all(promises);
    const newArr = arr.map((element) => {
      const el = results.find((resEL) => resEL.word === element.word);
      return el;
    });
    return newArr;
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
