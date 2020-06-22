import { API } from '../config';
import fetchData from '../utils/fetchData';

async function checkToken(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/`, {
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

export default checkToken;
