import { API } from '../config';
import fetchData from '../utils/fetchData';

const {
  URL,
  ENDPOINTS: { WORDS },
  QUERIES: {
    WORDS: { COUNT, GROUP, PAGE, WORDS_PER_SENTENCE, WORDS_PER_PAGE },
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
  if (appMode === 'EnglishPuzzle') {
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

async function maxPage(state) {
  try {
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(state);
    const link = `${URL}/${WORDS}/${COUNT}?${linkLevel}$${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default maxPage;
