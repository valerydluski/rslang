const minWords = 1;
const maxWords = 600;

export default (value) => {
  if (value) {
    return 'Required';
  }
  if (value && Number.isNaN(Number(value))) {
    return 'Must be a number';
  }

  if (value && value < minWords) {
    return `Must be at least ${minWords}`;
  }

  if (value && value > maxWords) {
    return `Must be no more ${maxWords}`;
  }

  return undefined;
};
