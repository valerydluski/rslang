import history from './history';

export default function checkHistoryLocation(paths) {
  const { pathname } = history.location;
  return paths.some((path) => path === pathname);
}
