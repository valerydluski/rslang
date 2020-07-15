import { toast } from 'react-toastify';
import { I18n } from 'react-redux-i18n';
import { API } from '../config';
import fetchData from '../utils/fetchData';
import { resetSessionData } from '../redux/Auth/Login/actions';

async function putStatisticToApi(statistic, user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, STATISTICS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/${STATISTICS}/`, {
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statistic),
    });
  } catch (e) {
    toast.error(I18n.t('Errors.statisticsProblems'));
    resetSessionData();
  }
}

export default putStatisticToApi;
