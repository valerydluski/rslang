import { LINK_FOR_WORDS } from '../config';
import fetchData from '../utils/fetchData';

async function wordsFetch({ gamesReducer }) {
  try {
    const { gameLevel, gamePage } = gamesReducer;
    const linkLevel = `group=${gameLevel - 1}&`;
    const linkPage = `page=${gamePage - 1}&`;
    const wordsPerSentence = `wordsPerExampleSentenceLTE=${100}&`;
    const wordsPerPage = `wordsPerPage=${10}`;
    const URL = `${LINK_FOR_WORDS}${linkLevel}${linkPage}${wordsPerSentence}${wordsPerPage}`;
    return await fetchData(URL);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
