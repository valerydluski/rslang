import { API } from '../config';
import fetchData from '../utils/fetchData';

const {
  URL,
  ENDPOINTS: { WORDS },
} = API;
const fixNumberForLink = 1;
const wordsPerSentenceGames = 100;
const wordsPerSentencePuzzle = 10;

const createData = ({ changeRound, changeAppMode, userSettings }) => {
  const { appMode } = changeAppMode;
  const gameWordsPerPage = userSettings.settings[`${appMode}WordsPerPage`];
  const gameLevel = changeRound[`${appMode}Level`];
  const gamePage = changeRound[`${appMode}Page`];
  const linkLevel = `group=${gameLevel - fixNumberForLink}`;
  const linkPage = `page=${gamePage - fixNumberForLink}`;
  let wordsPerSentence;
  let wordsPerPage;
  if (appMode === 'EnglishPuzzle') {
    wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentencePuzzle}`;
    wordsPerPage = `wordsPerPage=${wordsPerSentencePuzzle}`;
  } else {
    wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentenceGames}`;
    wordsPerPage = `wordsPerPage=${gameWordsPerPage}`;
  }
  return {
    linkLevel,
    linkPage,
    wordsPerSentence,
    wordsPerPage,
  };
};

async function wordsFetch(state) {
  try {
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(state);
    const link = `${URL}/${WORDS}?${linkLevel}$${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
