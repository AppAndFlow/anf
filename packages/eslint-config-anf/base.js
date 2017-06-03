// @noflow

const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  plugins: [
    'babel',
    'flowtype',
  ],
  rules: {
    'global-require': OFF,
    'linebreak-style': OFF,
    'no-else-return': OFF,
    'no-mixed-operators': OFF,
    'no-return-assign': OFF,
    'no-underscore-dangle': OFF,
    'no-use-before-define': OFF,
    'prefer-template': OFF,
    'no-param-reassign': [ERROR, { props: false }],
    'no-restricted-syntax': [
      ERROR,
      'LabeledStatement',
      'WithStatement',
    ],
    'class-methods-use-this': OFF,
    'arrow-body-style': OFF,

    'babel/new-cap': ERROR,

    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
    'flowtype/use-flow-type': ERROR,
    'flowtype/boolean-style': [ERROR, 'boolean'],
    'flowtype/no-dupe-keys': ERROR,
    'flowtype/no-weak-types': OFF,

    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'import/no-unresolved': [ERROR, { ignore: ['\.png$', '^!'] }], // eslint-disable-line no-useless-escape
    'import/prefer-default-export': OFF,

    // Use the babel version of these rules instead.
    'new-cap': OFF,
  },
  globals: {
    // Flow globals
    ReactElement: true,
    ReactClass: true,
    $Enum: true,
    $Shape: true,
    $ReadOnlyArray: false,
    $PropertyType: false,
  },
};
