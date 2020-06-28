import { CHECKBOXES } from '../../config';

const checkboxesValidator = (data) => {
  return CHECKBOXES.map((el) => data[`${el}`]).some((el) => el === true);
};

export default checkboxesValidator;
