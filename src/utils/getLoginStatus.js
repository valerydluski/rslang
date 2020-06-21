export default function getLoginStatus() {
  return JSON.parse(localStorage.getItem('isLogin')) || false;
}
