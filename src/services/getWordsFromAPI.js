import { API } from '../config';
import fetchData from '../utils/fetchData';

const {
  URL,
  ENDPOINTS: { WORDS },
} = API;
const fixNumberForLink = 1;
const wordsPerSentenceGames = 100;
const wordsPerSentencePuzzle = 10;

async function wordsFetch({ changeRound, changeAppMode }) {
  try {
    const { appMode } = changeAppMode;
    const gameLevel = changeRound[`${appMode}Level`];
    const gamePage = changeRound[`${appMode}Page`];
    const linkLevel = `group=${gameLevel - fixNumberForLink}`;
    const linkPage = `page=${gamePage - fixNumberForLink}`;
    let wordsPerSentence;
    if (appMode === 'EnglishPuzzle') {
      wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentencePuzzle}`;
    } else wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentenceGames}`;
    const wordsPerPage = `wordsPerPage=${wordsPerSentencePuzzle}`;
    const link = `${URL}/${WORDS}?${linkLevel}$${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
