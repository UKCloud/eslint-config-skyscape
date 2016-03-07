'use strict';

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': ['error', {vars: 'local', args: 'after-used'}],
    'no-use-before-define': ['error', {functions: false, classes: true}]
  }
};
