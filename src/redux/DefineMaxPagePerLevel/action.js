import MAX_PAGE from './types';

export default function fetchMaxPage(data) {
  return {
    type: MAX_PAGE,
    payload: data,
  };
}
