module.exports = {
  'extends': [
    '@react-native-community',
    './react.js'
  ],
  'env': {
    'browser': false,
    'node': true,
    'es6': true,
  },
  'rules': {
    'react-native/no-color-literals': 0,
    'react-native/no-inline-styles': 0,
    'react-native/no-raw-text': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
};
