// @noflow

const deepExtend = require('deep-extend');

const base = require('./base');

const OFF = 0;

const config = {
  extends: ['airbnb', 'prettier', 'prettier/flowtype'],
  rules: {
    'no-console': OFF,
  },
};

module.exports = deepExtend(base, config);
