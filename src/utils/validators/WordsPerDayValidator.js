import { maxWordsPerDay, minWordsPerDay } from '../../config';

export default (value) => {
  if (value) {
    return 'Required';
  }
  if (value && Number.isNaN(Number(value))) {
    return 'Must be a number';
  }

  if (value && value < minWordsPerDay) {
    return `Must be at least ${minWordsPerDay}`;
  }

  if (value && value > maxWordsPerDay) {
    return `Must be no more ${maxWordsPerDay}`;
  }

  return undefined;
};
