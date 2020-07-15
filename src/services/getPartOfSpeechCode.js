import { toast } from 'react-toastify';
import { I18n } from 'react-redux-i18n';
import { DICTIONARY_API } from '../config';
import fetchData from '../utils/fetchData';

async function getpartOfSpeechCode(word) {
  try {
    const {
      LINK,
      ENDPOINTS: { PUBLIC, VERSION, WORD, SEARCH },
    } = DICTIONARY_API;
    return await fetchData(`${LINK}/${PUBLIC}/${VERSION}/${WORD}/${SEARCH}?${SEARCH}=${word}`);
  } catch (e) {
    return toast.error(I18n.t('Errors.APIProblem'));
  }
}

export default getpartOfSpeechCode;
