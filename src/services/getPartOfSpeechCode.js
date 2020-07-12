import { toast } from 'react-toastify';
import { DICTIONARY_API } from '../config';
import fetchData from '../utils/fetchData';

async function getPartOfSpeechCode(word) {
  try {
    const {
      LINK,
      ENDPOINTS: { PUBLIC, VERSION, WORD, SEARCH },
    } = DICTIONARY_API;
    return await fetchData(`${LINK}/${PUBLIC}/${VERSION}/${WORD}/${SEARCH}?${SEARCH}=${word}`);
  } catch (e) {
    return toast.error(e.message);
  }
}

export default getPartOfSpeechCode;
