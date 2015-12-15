'use strict';

module.exports = {
  'extends': [
    'eslint-config-skyscape/rules/best-practices.js',
    'eslint-config-skyscape/rules/ecmascript-6.js',
    'eslint-config-skyscape/rules/nodejs-commonjs.js',
    'eslint-config-skyscape/rules/possible-errors.js',
    'eslint-config-skyscape/rules/strict-mode.js',
    'eslint-config-skyscape/rules/stylistic-issues.js',
    'eslint-config-skyscape/rules/variables.js'
  ],
  'env': {
    browser: false,
    node: true,
    es6: false
  },
  'ecmaFeatures': {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: false,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: false,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    regexYFlag: true,
    regexUFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: false
  },
  'globals': {},
  'rules': {}
};
