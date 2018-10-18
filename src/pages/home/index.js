import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text} from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { getTest, modifyTest } from '../../actions/test';

import './index.scss';

const mapStateToProps = state => ({
});

@connect(mapStateToProps, (dispatch) => ({
  getTest (options) {
    return dispatch(getTest(options));
  },
  modifyTest () {
    return dispatch(modifyTest());
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  state = {
    tests: {},
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps);
  }

  componentDidShow () { }

  componentDidHide () { }

  getTest = async () => {
    const { response } = await this.props.getTest({a: 1, b: 'test'});
    if (response) {
      console.log(response);
      this.setState({
        tests: response
      });
    }
  }

  render () {
    const { tests } = this.state;
    return (
      <View className='index-page'>
        <Button className='dec_btn' onClick={this.getTest}>getTest</Button>
        <Button className='dec_btn' onClick={this.props.modifyTest}>modifyTest</Button>
        <View><Text>userName: {tests.username}</Text></View>
      </View>
    );
  }
}

export default Index;
