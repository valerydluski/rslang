import history from './history';

export default function getRedirectFunction(link) {
  return () => {
    history.push(link);
  };
}
