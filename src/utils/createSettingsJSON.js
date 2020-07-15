const createSettingsJSON = (settings) => {
  return {
    wordsPerDay: settings.wordsPerDay,
    optional: settings,
  };
};

export default createSettingsJSON;
