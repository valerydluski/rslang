export default (value) => {
  const required = () => (value ? undefined : 'Required');
  const number = () => (value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined);
  const minValue = (min) => () => (value && value < min ? `Must be at least ${min}` : undefined);
  const maxValue = (max) => () => (value && value > max ? `Must be no more ${max}` : undefined);
  const minValueCheck = minValue(1);
  const maxValueCheck = maxValue(600);

  return [required, number, minValueCheck, maxValueCheck];
};
