import { TOAST } from '../constants/actionTypes';

const showMessage = toast => ({
  type: TOAST,
  toast,
});

export default showMessage;
