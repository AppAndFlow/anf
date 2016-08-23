const deepExtend = require('deep-extend');

const base = require('./base');

const OFF = 0;

const config = {
  extends: 'airbnb',
  rules: {
    'react/prefer-stateless-function': OFF,
    'react/sort-comp': OFF,
    'react/no-multi-comp': OFF,
    'react/jsx-filename-extension': OFF,
    'jsx-a11y/img-has-alt': OFF,
  },
};

module.exports = deepExtend(base, config);
