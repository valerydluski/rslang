export default (value) => {
  if (!value) {
    return 'Required';
  }
  if (value && Number.isNaN(Number(value))) {
    return 'Must be a number';
  }

  if (value && value < 1) {
    return `Must be at least ${1}`;
  }

  if (value && value > 6) {
    return `Must be no more ${6}`;
  }

  return undefined;
};
