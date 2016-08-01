const OFF = 0;
const WARN = 1;
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
    'import/no-unresolved': [ERROR, { ignore: ['\.png$', '^!'] }], // eslint-disable-line no-useless-escape
    'linebreak-style': OFF,
    'max-len': [WARN, 120],
    'no-duplicate-imports': OFF,
    'no-return-assign': OFF,
    'no-underscore-dangle': OFF,
    'no-use-before-define': OFF,

    'babel/array-bracket-spacing': WARN,
    'babel/arrow-parens': OFF,
    'babel/flow-object-type': WARN,
    'babel/func-params-comma-dangle': [OFF, 'always-multiline'],
    'babel/generator-star-spacing': WARN,
    'babel/new-cap': WARN,
    'babel/no-await-in-loop': WARN,
    'babel/object-curly-spacing': [WARN, 'always'],
    'babel/object-shorthand': WARN,

    'flowtype/require-valid-file-annotation': [ERROR, 'always'],
    'flowtype/space-after-type-colon': [WARN, 'always'],
    'flowtype/space-before-type-colon': [WARN, 'never'],
    'flowtype/use-flow-type': ERROR,

    // Use the babel version of these rules instead.
    'array-bracket-spacing': OFF,
    'arrow-parens': OFF,
    'flow-object-type': OFF,
    'func-params-comma-dangle': OFF,
    'generator-star-spacing': OFF,
    'new-cap': OFF,
    'no-await-in-loop': OFF,
    'object-curly-spacing': OFF,
    'object-shorthand': OFF,
  },
  globals: {
    __DEV__: true,

    // Flow globals
    ReactElement: true,
    ReactClass: true,
    $Enum: true,
    $Shape: true,
  },
};
