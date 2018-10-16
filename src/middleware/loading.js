import Taro from '@tarojs/taro';

export default store => next => action => { // eslint-disable-line no-unused-vars
  const { isLoading } = action;
  isLoading ? Taro.showLoading({ title: 'Loading...', mask: true }) : Taro.hideLoading();

  return next(action);
};
