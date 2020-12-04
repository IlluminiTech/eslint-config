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
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
};
