import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';
import getPartOfSpeechCode from './getPartOfSpeechCode';

async function saveOneWord(wordId, wordOptions, user, word) {
  try {
    const data = await getPartOfSpeechCode(word);
    const newOptions = { ...wordOptions };
    if (data && data[0] && data[0].meanings) {
      const { partOfSpeechCode } = data[0].meanings[0];
      newOptions.optional.partOfSpeechCode = partOfSpeechCode;
    }
    newOptions.optional.addDate = new Date().valueOf();
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
      body: JSON.stringify(newOptions),
    });
  } catch (e) {
    toast.error(e.message);
  }
}

export default saveOneWord;
