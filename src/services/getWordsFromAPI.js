import { LINK_FOR_WORDS } from '../config';
import fetchData from '../utils/fetchData';

const fixNumberForLink = 1;
const wordsPerSentenceGames = 100;
const wordsPerSentencePuzzle = 10;

async function wordsFetch({ gamesReducer, changeAppMode }) {
  try {
    const { gameLevel, gamePage } = gamesReducer;
    const { appMode } = changeAppMode;
    const linkLevel = `group=${gameLevel - fixNumberForLink}&`;
    const linkPage = `page=${gamePage - fixNumberForLink}&`;
    let wordsPerSentence;
    if (appMode === 'EnglishPuzzle') {
      wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentencePuzzle}&`;
    } else wordsPerSentence = `wordsPerExampleSentenceLTE=${wordsPerSentenceGames}&`;
    const wordsPerPage = `wordsPerPage=${wordsPerSentencePuzzle}`;
    const URL = `${LINK_FOR_WORDS}${linkLevel}${linkPage}${wordsPerSentence}${wordsPerPage}`;
    return await fetchData(URL);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
