import { I18n } from 'react-redux-i18n';
import { MIN_WORDS_PER_DAY } from '../../config';

export default (value) => {
  if (!value) {
    return I18n.t('Errors.empty');
  }
  if (value && Number.isNaN(Number(value))) {
    return I18n.t('Errors.number');
  }

  if (value && value < MIN_WORDS_PER_DAY) {
    return `${I18n.t('Errors.least')}${MIN_WORDS_PER_DAY}`;
  }

  if (value && value > 50) {
    return `${I18n.t('Errors.more')}${50}`;
  }

  return undefined;
};
