import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getStatistic(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, STATISTICS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/${STATISTICS}`, {
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

export default getStatistic;
