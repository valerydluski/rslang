import { API } from '../config';
import fetchData from '../utils/fetchData';

async function checkToken(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS, WORDS },
    } = API;

    return await fetchData(`${URL}/${USERS}/${user.userId}/${WORDS}`, {
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
