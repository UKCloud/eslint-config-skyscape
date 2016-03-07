'use strict';

module.exports = {
  rules: {
    'callback-return': ['error', ['callback', 'cb', 'next', 'done']],
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': ['error', {grouping: true}],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'error'
  }
};
