import { TOAST } from '../constants/actionTypes';

const INIT_TOAST_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
};

const system = (
  state = { toast: INIT_TOAST_STATE },
  action,
) => {
  const { isLoading, toast } = action;

  switch (action.type) {
    case TOAST:
      return {
        ...state,
        ...toast,
      };

    default:
      return {
        ...state,
        ...isLoading !== undefined && { isLoading },
      };
  }
};

export default system;
