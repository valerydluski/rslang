import { I18n } from 'react-redux-i18n';
import { MAX_WORDS_PER_PAGE, MIN_WORDS_PER_PAGE } from '../../config';

export default (value) => {
  if (!value) {
    return I18n.t('Errors.empty');
  }
  if (value && Number.isNaN(Number(value))) {
    return I18n.t('Errors.number');
  }

  if (value && value < MIN_WORDS_PER_PAGE) {
    return `${I18n.t('Errors.least')}${MIN_WORDS_PER_PAGE}`;
  }

  if (value && value > MAX_WORDS_PER_PAGE) {
    return `${I18n.t('Errors.more')}${MAX_WORDS_PER_PAGE}`;
  }

  return undefined;
};
