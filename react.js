module.exports = {
  'extends': [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    './typescript.js',
  ],
  'plugins': ['jsx-a11y'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'rules': {
    'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx'] }],
    'react/no-unescaped-entities': ['error', { 'forbid': ['>', '\'', '}'] }],
    'react-hooks/exhaustive-deps': ['error', { 'additionalHooks': '(useMemoOne)' }],
    'react-hooks/rules-of-hooks': 'error',
  },
};
