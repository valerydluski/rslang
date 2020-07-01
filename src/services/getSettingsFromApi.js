import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getSettingsFromApi(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, SETTINGS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/${SETTINGS}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: 'application/json',
      },
    });
  } catch (e) {
    return null;
  }
}

export default getSettingsFromApi;
