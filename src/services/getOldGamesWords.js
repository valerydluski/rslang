import { API, GAME_NAME } from '../config';
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

const createData = ({ level, page, count }, gameName) => {
  const gameWordsPerPage = count;
  const gameLevel = level;
  const gamePage = page;
  const linkLevel = `${GROUP}=${gameLevel - fixNumberForLink}`;
  const linkPage = `${PAGE}=${gamePage - fixNumberForLink}`;
  let wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentenceGames}`;
  let wordsPerPage = `${WORDS_PER_PAGE}=${gameWordsPerPage}`;
  if (gameName === GAME_NAME.englishPuzzle || gameName === GAME_NAME.makeSentence) {
    wordsPerSentence = `${WORDS_PER_SENTENCE}=${wordsPerSentencePuzzle}`;
    if (gameName === GAME_NAME.makeSentence) {
      wordsPerPage = `${WORDS_PER_PAGE}=${gameWordsPerPage}`;
    } else {
      wordsPerPage = `${WORDS_PER_PAGE}=${wordsPerSentencePuzzle}`;
    }
  }
  return {
    linkLevel,
    linkPage,
    wordsPerSentence,
    wordsPerPage,
  };
};

async function wordsFetch(payload, gameName) {
  try {
    const { linkLevel, linkPage, wordsPerSentence, wordsPerPage } = createData(payload, gameName);
    const link = `${URL}/${WORDS}?${linkLevel}&${linkPage}&${wordsPerSentence}&${wordsPerPage}`;
    return await fetchData(link);
  } catch (e) {
    throw new Error('problem with API');
  }
}

export default wordsFetch;
