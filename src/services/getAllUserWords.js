import { toast } from 'react-toastify';
import { API } from '../config';
import fetchData from '../utils/fetchData';

async function getAllUserWords(user) {
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
    toast.error(e.message);
    return null;
  }
}

export default getAllUserWords;
