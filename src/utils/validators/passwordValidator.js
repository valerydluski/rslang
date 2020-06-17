export default (password) => {
  if (
    password &&
    password.match(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[+\-_@$!%*?&#.,;:[\]{}])[0-9a-zA-Z+\-_@$!%*?&#.,;:[\]{}]{8,}/
    )
  )
    return undefined;

  return 'Password must contain numbers, uppercase and lowercase letter, one of the following characters +-_@$!%*?&#.,;:[]{}';
};
