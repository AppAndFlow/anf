// @noflow

const deepExtend = require('deep-extend');

const base = require('./base');

const OFF = 0;

const config = {
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  rules: {
    'react/prefer-stateless-function': OFF,
    'react/sort-comp': OFF,
    'react/no-multi-comp': OFF,
    'react/jsx-filename-extension': OFF,
    'react/require-extension': OFF,
    'react/no-unescaped-entities': OFF,
    'react/require-default-props': OFF,
    'react/no-array-index-key': OFF,
    'jsx-a11y/img-has-alt': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/anchor-has-content': OFF,
    'jsx-a11y/tabindex-no-positive': OFF,
    'jsx-a11y/accessible-emoji': OFF,
  },
};

module.exports = deepExtend(base, config);
