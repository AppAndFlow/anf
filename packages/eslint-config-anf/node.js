const deepExtend = require('deep-extend');

const base = require('./base');

const OFF = 0;
const ERROR = 2;

const config = {
  extends: 'airbnb-base',
  rules: {
    'no-console': OFF,
    'no-param-reassign': [ERROR, { props: false }],
    'require-yield': OFF, // Bug with async functions
  },
};

module.exports = deepExtend(base, config);
