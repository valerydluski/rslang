import { I18n } from 'react-redux-i18n';

export default (email) => {
  if (email && email.match(/\S+@\S+\.\S+/)) return null;

  return I18n.t('Validators.email');
};
