import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtToast } from 'taro-ui';
import { connect } from '@tarojs/redux';

const INIT_STATE = {
  image: '',
  icon: '',
  text: '',
  status: '',
  duration: 3000,
  hasMask: false,
  isOpened: false
};

const mapStateToProps = state => ({
  p_image: state.system.toast.image,
  p_icon: state.system.toast.icon,
  p_text: state.system.toast.text,
  p_status: state.system.toast.status,
  p_duration: state.system.toast.duration,
  p_hasMask: state.system.toast.hasMask,
  p_isOpened: state.system.toast.isOpened
});

@connect(mapStateToProps, null)
export default class ToastPage extends Component {

  constructor () {
    super(...arguments);
    this.state = INIT_STATE;
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  handleClick = (text, icon, image, hasMask, status) => {
    const state = Object.assign(
      { ...INIT_STATE, isOpened: true },
      { text, icon, image, hasMask, status }
    );

    this.setState(state);
  }

  render () {
    const {
      text,
      icon,
      status,
      isOpened,
      duration,
      image,
      hasMask
    } = this.state;

    return (
      <View>
        <AtToast
          icon={icon}
          text={text}
          image={image}
          status={status}
          hasMask={hasMask}
          isOpened={isOpened}
          duration={duration}
        />
      </View>
    );
  }
}
