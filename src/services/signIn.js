import { API } from '../config';
import fetchData from '../utils/fetchData';

async function signIn(user) {
  try {
    const {
      URL,
      ENDPOINTS: { SIGNIN },
    } = API;
    return await fetchData(`${URL}/${SIGNIN}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (e) {
    console.log('Incorrect login or password');
  }
  return null;
}

export default signIn;
