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
const gameWordsPerPage = 50;
const wordsPerLevel = 600;
const pagePerLevel = wordsPerLevel / gameWordsPerPage;

const createData = (level, words) => {
  let newLevel = level;
  let pageForLink = Math.ceil(words / gameWordsPerPage);
  if (pageForLink > pagePerLevel) {
    pageForLink = 1;
    newLevel += 1;
  }
  if (level > 6) newLevel = 1;
  const linkLevel = `${GROUP}=${newLevel - fixNumberForLink}`;
  const linkPage = `${PAGE}=${pageForLink - fixNumberForLink}`;
  const wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentenceGames}`;
  const wordsPerPage = `${WORDS_PER_PAGE}=${gameWordsPerPage}`;
  return {
    linkLevel,
    linkPage,
    wordsPerSentence,
    wordsPerPage,
  };
};

async function wordsFetchForLearn({ level, words }) {
  try {
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(level, words);
    const link = `${URL}/${WORDS}?${linkLevel}&${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetchForLearn;
