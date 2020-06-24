export default (password) => {
  const errorMessage =
    'Password must contain numbers, uppercase and lowercase letter, one of the following characters +-_@$!%*?&#.,;:[]{}';
  const SYMBOLS_REGEX = /[-+_@$!%*?&#.,;:[\]{}]/;
  if (password && password.length < 8) {
    return errorMessage;
  }

  if (!SYMBOLS_REGEX.test(password)) {
    return errorMessage;
  }

  if (!/[0-9]/.test(password)) {
    return errorMessage;
  }

  if (!/[A-Z]/.test(password)) {
    return errorMessage;
  }

  if (!/[a-z]/.test(password)) {
    return errorMessage;
  }

  const emptyString = password
    .replace(/[a-z]/gi, '')
    .replace(/[0-9]/g, '')
    .replace(new RegExp(SYMBOLS_REGEX, 'g'), '');
  if (emptyString) {
    return errorMessage;
  }

  return undefined;
};
