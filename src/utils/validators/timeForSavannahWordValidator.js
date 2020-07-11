import { I18n } from 'react-redux-i18n';

export default (value) => {
  if (!value) {
    return I18n.t('Errors.empty');
  }
  if (value && Number.isNaN(Number(value))) {
    return I18n.t('Errors.number');
  }

  if (value && value < 1) {
    return `${I18n.t('Errors.least')}${1}`;
  }

  if (value && value > 10) {
    return `${I18n.t('Errors.more')}${10}`;
  }

  return undefined;
};
