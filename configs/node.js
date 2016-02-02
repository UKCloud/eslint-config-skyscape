'use strict';

module.exports = {
  'extends': [
    'skyscape/configs/core.js',
    'skyscape/rules/ecmascript-6.js',
    'skyscape/rules/nodejs-commonjs.js'
  ],
  'env': {
    node: true
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
    restParams: false,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    globalReturn: false,
    jsx: false
  },
  'globals': {
  },
  'rules': {
  }
};
