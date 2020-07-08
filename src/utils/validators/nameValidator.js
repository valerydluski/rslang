import { toast } from 'react-toastify';

export default (value) => {
  if (!value) {
    return toast.warning('error');
  }
  return undefined;
};
