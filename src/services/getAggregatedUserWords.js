import { toast } from 'react-toastify';
import { I18n } from 'react-redux-i18n';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getAggregatedUserWords(user, difficulty) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, DICTIONARY },
      QUERIES: {
        WORDS: { FILTER, WORDS_PER_PAGE },
      },
    } = API;
    let filter;
    switch (difficulty) {
      case 'medium':
        filter = {
          $and: [
            {
              'userWord.optional.deleted': false,
            },
            {
              'userWord.optional.difficult': false,
            },
          ],
        };
        break;
      case 'difficult':
        filter = {
          $and: [
            {
              'userWord.optional.deleted': false,
            },
            {
              'userWord.optional.difficult': true,
            },
          ],
        };
        break;
      case 'deleted':
        filter = {
          'userWord.optional.deleted': true,
        };
        break;
      case 'all':
        filter = {
          $and: [
            {
              $or: [
                {
                  'userWord.optional.deleted': false,
                },
                {
                  'userWord.optional.deleted': true,
                },
              ],
            },
            {
              $or: [
                {
                  'userWord.optional.difficult': false,
                },
                {
                  'userWord.optional.difficult': true,
                },
              ],
            },
          ],
        };
        break;
      default:
        break;
    }

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
    toast.error(I18n.t('Errors.APIProblem'));
    return null;
  }
}

export default getAggregatedUserWords;
