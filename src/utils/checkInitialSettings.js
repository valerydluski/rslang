import { INITIAL_SETTINGS } from '../config';

const checkInitialSettings = (settingsFromApi) => {
  const newSettings = {};
  Object.keys(INITIAL_SETTINGS).forEach((key) => {
    if (settingsFromApi[`${key}`] !== undefined) {
      newSettings[`${key}`] = settingsFromApi[`${key}`];
    } else {
      newSettings[`${key}`] = INITIAL_SETTINGS[`${key}`];
    }
  });
  return newSettings;
};

export default checkInitialSettings;
