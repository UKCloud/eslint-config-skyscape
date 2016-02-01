'use strict';

module.exports = {
  'extends': [
    'skyscape/rules/best-practices.js',
    'skyscape/rules/ecmascript-6.js',
    'skyscape/rules/nodejs-commonjs.js',
    'skyscape/rules/possible-errors.js',
    'skyscape/rules/strict-mode.js',
    'skyscape/rules/stylistic-issues.js',
    'skyscape/rules/variables.js'
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
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: false
  },
  'globals': {},
  'rules': {}
};
