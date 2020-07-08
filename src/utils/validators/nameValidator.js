import { I18n } from 'react-redux-i18n';

export default (value) => {
  if (!value) {
    return I18n.t('Errors.name');
  }
  return undefined;
};
