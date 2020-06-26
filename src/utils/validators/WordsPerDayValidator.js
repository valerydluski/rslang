import { MAX_WORDS_PER_DAY, MIN_WORDS_PER_DAY } from '../../config';

export default (value) => {
  if (value) {
    return 'Required';
  }
  if (value && Number.isNaN(Number(value))) {
    return 'Must be a number';
  }

  if (value && value < MIN_WORDS_PER_DAY) {
    return `Must be at least ${MIN_WORDS_PER_DAY}`;
  }

  if (value && value > MAX_WORDS_PER_DAY) {
    return `Must be no more ${MAX_WORDS_PER_DAY}`;
  }

  return undefined;
};
