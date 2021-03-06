import { API } from '../config';
import fetchData from '../utils/fetchData';

async function signUp(user) {
  try {
    const {
      URL,
      ENDPOINTS: { USERS },
    } = API;
    await fetchData(`${URL}/${USERS}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    throw new Error('User with this e-mail exists');
  }
}

export default signUp;
