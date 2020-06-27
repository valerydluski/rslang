const checkboxesValidator = (data) => {
  const checkboxes = [
    'textExample',
    'textMeaning',
    'transcription',
    'translate',
    'imageAssociation',
  ];
  return checkboxes.map((el) => data[`${el}`]).some((el) => el === true);
};

export default checkboxesValidator;
