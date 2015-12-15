/* eslint no-magic-numbers: 0 */
'use strict';

module.exports = {
  rules: {
    'accessor-pairs': 0,
    'block-scoped-var': 2,
    'complexity': [1, 5],
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, {allowKeywords: true}],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 0,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 0,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [2, {enforceConst: true}],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': [2, {props: false}],
    'no-process-env': 1,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': [1, {
      terms: ['todo', 'fixme'],
      location: 'anywhere'
    }],
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 2
  }
};