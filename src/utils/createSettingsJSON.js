const createSettingsJSON = (settings) => {
  return {
    wordsPerDay: settings.WordsPerDay,
    optional: settings,
  };
};

export default createSettingsJSON;
