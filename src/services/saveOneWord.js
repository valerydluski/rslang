import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function saveOneWord(wordId, wordOptions, user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, WORDS },
    } = API;

    await fetchData(`${URL}/${USERS}/${user.userId}/${WORDS}/${wordId}`, {
      method: 'POST',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wordOptions),
    });
  } catch (e) {
    toast.error(e.message);
  }
}

export default saveOneWord;
