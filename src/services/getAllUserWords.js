import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';

const WORDS_ON_PAGE = 3600;

async function getAllUserWords(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, DICTIONARY },
      QUERIES: {
        WORDS: { FILTER, WORDS_PER_PAGE },
      },
    } = API;

    const filter = {
      'userWord.optional.delete': false,
    };

    return await fetchData(
      `${URL}/${USERS}/${
        user.userId
      }/${DICTIONARY}?${WORDS_PER_PAGE}=${WORDS_ON_PAGE}&${FILTER}=${JSON.stringify(filter)}`,
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

export default getAllUserWords;
