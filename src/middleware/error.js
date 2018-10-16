import Taro from '@tarojs/taro';
import closePng from '../assets/icon/close-circle-o.png';

export default store => next => action => { // eslint-disable-line no-unused-vars
  const {
    suppressError, error, status,
  } = action;
  const isNotLogin = [401, 403, 5001].indexOf(status) > -1;

  if (isNotLogin) {
    Taro.showToast({title: 'Please log in', image: closePng});
  } else {
    const isError = [
      500, 504,
    ].indexOf(status) > -1;
    if (isError && !suppressError) {
      Taro.showToast({ title: 'Server error', image: closePng });
    } else if (error && !suppressError) {
      Taro.showToast({ title: error, image: closePng });
    }
  }

  return next(action);
};
