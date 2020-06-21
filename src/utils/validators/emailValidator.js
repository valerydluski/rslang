export default (email) => {
  if (email && email.match(/\S+@\S+\.\S+/)) return null;

  return 'Invalid email address';
};
