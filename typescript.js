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
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/indent': 'off',
  },
};
