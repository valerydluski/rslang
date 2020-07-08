import { toast } from 'react-toastify';

export default (value) => {
  if (!value) {
    return toast.warning('name not be empty');
  }
  return undefined;
};
