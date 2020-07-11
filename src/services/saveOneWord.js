import { toast } from 'react-toastify';
import { API, DICTIONARY_API } from '../config';
import fetchData from '../utils/fetchData';

async function saveOneWord(wordId, wordOptions, user, word) {
  const {
    LINK,
    ENDPOINTS: { PUBLIC, VERSION, WORD, SEARCH },
  } = DICTIONARY_API;
  const data = await fetchData(`${LINK}/${PUBLIC}/${VERSION}/${WORD}/${SEARCH}?${SEARCH}=${word}`);
  const newOptions = { ...wordOptions };
  if (data && data[0] && data[0].meanings) {
    const { partOfSpeechCode } = data[0].meanings[0];
    newOptions.partOfSpeechCode = partOfSpeechCode;
  }
  newOptions.addDate = new Date().valueOf();
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
      body: JSON.stringify(newOptions),
    });
  } catch (e) {
    toast.error(e.message);
  }
}

export default saveOneWord;
