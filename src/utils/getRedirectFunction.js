import history from './history';

export default function getRedirectFunction(link) {
  console.log('getRedirectFunction -> link', link);

  return () => {
    history.push(link);
  };
}
