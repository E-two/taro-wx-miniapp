/**
 * pages template quick generation script, execute the command 'npm run template test'
 */

const fs = require('fs'); // eslint-disable-line

const dirName = process.argv[2];

if (!dirName) {
  console.log('The folder name cannot be empty!');
  console.log('The sample：npm run template test');
  process.exit(0);
}

// pages template
const indexTemplate = `import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

const mapStateToProps = state => ({
});

@connect(mapStateToProps, (dispatch) => ({
}))
export default class ${titleCase(dirName)} extends Component {
  config = {
    navigationBarTitleText: '${dirName}',
  };

  constructor() {
    super(...arguments);
  }

  state = { }

  componentDidMount () { }

  componentWillUnmount () { }

  render() {
    return (
      <View className='${dirName}-page'>
        ${dirName}
      </View>
    );
  }
}
`;

// scss template
const scssTemplate = `@import "../../styles/mixin";

.${dirName}-page {

  @include wh(100%, 100%);
}
`;

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir
process.chdir(`./src/pages/${dirName}`); // cd

fs.writeFileSync('index.js', indexTemplate);
fs.writeFileSync('index.scss', scssTemplate);

console.log(`Template ${dirName} has been created.`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
