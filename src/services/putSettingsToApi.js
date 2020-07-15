import { toast } from 'react-toastify';
import { I18n } from 'react-redux-i18n';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function putSettingsToApi(settings, user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, SETTINGS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/${SETTINGS}/`, {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });
  } catch (e) {
    toast.error(I18n.t('Errors.settingProblems'));
    throw new Error('Did not put settings');
  }
}

export default putSettingsToApi;
