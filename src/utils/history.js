import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

export function forwardTo(path) {
  history.push(path);
  console.log('forwardTo -> history', history.location);
  console.log('forwardTo -> history', history);
}
