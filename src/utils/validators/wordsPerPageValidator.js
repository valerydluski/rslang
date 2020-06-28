import { MAX_WORDS_PER_PAGE, MIN_WORDS_PER_PAGE } from '../../config';

export default (value) => {
  if (!value) {
    return 'Required';
  }
  if (value && Number.isNaN(Number(value))) {
    return 'Must be a number';
  }

  if (value && value < MIN_WORDS_PER_PAGE) {
    return `Must be at least ${MIN_WORDS_PER_PAGE}`;
  }

  if (value && value > MAX_WORDS_PER_PAGE) {
    return `Must be no more ${MAX_WORDS_PER_PAGE}`;
  }

  return undefined;
};
