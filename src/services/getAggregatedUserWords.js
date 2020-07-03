import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getAgreggatedUserWords(user, difficulty) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, DICTIONARY },
      QUERIES: {
        WORDS: { FILTER, WORDS_PER_PAGE },
      },
    } = API;

    const filter = {
      'userWord.difficulty': difficulty,
    };

    const wordsPerPage = 3600;

    return await fetchData(
      `${URL}/${USERS}/${
        user.userId
      }/${DICTIONARY}?${WORDS_PER_PAGE}=${wordsPerPage}&${FILTER}=${JSON.stringify(filter)}`,
      {
        method: 'GET',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${user.token}`,
          Accept: 'application/json',
        },
      }
    );
  } catch (e) {
    toast.error(e.message);
    return null;
  }
}

export default getAgreggatedUserWords;
