import REGISTER_TO_SERVER from './types';

export default function registerToServer(data) {
  return {
    type: REGISTER_TO_SERVER,
    payload: data,
  };
}
