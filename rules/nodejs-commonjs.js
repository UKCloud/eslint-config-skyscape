'use strict';

module.exports = {
  rules: {
    'callback-return': [2, ['callback', 'cb', 'next', 'done']],
    'global-require': 2,
    'handle-callback-err': 2,
    'no-mixed-requires': [2, {grouping: true}],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-restricted-modules': 0,
    'no-sync': 2
  }
};
