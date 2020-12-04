module.exports = {
  'extends': [
    'plugin:@typescript-eslint/recommended',
    './index.js'
  ],
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'rules': {
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0,
  },
};
