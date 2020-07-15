import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';
import { I18n } from 'react-redux-i18n';

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
      'userWord.optional.deleted': false,
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
    toast.error(I18n.t('Errors.APIProblem'));
    return null;
  }
}

export default getAllUserWords;
