import { API } from '../config';
import fetchData from '../utils/fetchData';

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

const createData = ({ level, page, count }) => {
  const gameWordsPerPage = count;
  const gameLevel = level;
  const gamePage = page;
  const linkLevel = `${GROUP}=${gameLevel - fixNumberForLink}`;
  const linkPage = `${PAGE}=${gamePage - fixNumberForLink}`;
  const wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentenceGames}`;
  const wordsPerPage = `${WORDS_PER_PAGE}=${gameWordsPerPage}`;
  return {
    linkLevel,
    linkPage,
    wordsPerSentence,
    wordsPerPage,
  };
};

async function wordsFetch(payload) {
  try {
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(payload);
    const link = `${URL}/${WORDS}?${linkLevel}&${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
