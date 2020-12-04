module.exports = {
  'extends': [
    'eslint:recommended',
    'prettier',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'env': {
    'es6': true,
  },
  'plugins': ['import'],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  'rules': {
    'no-console': ['error', { 'allow': ['warn', 'error'] }],

    // Best Practices
    'curly': 'error',
    'eqeqeq': 'error',
    'no-eq-null': 'error',

    // Variables
    'no-use-before-define': ['error', 'nofunc'],

    // Stylistic Issues
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'func-call-spacing': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 1 }],
    'key-spacing': ['error', { 'mode': 'minimum' }],
    'keyword-spacing': 'error',
    'max-len': ['error', 120],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true, 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-infix-ops': 'error',

    // ECMAScript 6
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-nested-ternary': 'error',
    'no-useless-constructor': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-template': 'error',

    // Imports
    'import/no-extraneous-dependencies': 2,
    'import/extensions': ['error', 'never', { 'svg': 'always' }],
    'import/no-named-as-default-member': 2,
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-duplicates': 2,
    'import/no-useless-path-segments': 2,
    'import/no-cycle': 2,
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/named': 0,
    'import/default': 0,
    'import/no-named-as-default': 0,
    'import/no-unused-modules': 0,
    'import/no-deprecated': 0,
  },
};
