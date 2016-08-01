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
    'max-len': [WARN, 120],
    'no-use-before-define': OFF,
    'no-underscore-dangle': OFF,
    'no-return-assign': OFF,
    'no-duplicate-imports': OFF,
    'import/no-unresolved': [ERROR, { ignore: ['\.png$', '^!'] }], // eslint-disable-line no-useless-escape
    // Babel rules.
    'generator-star-spacing': OFF,
    'new-cap': OFF,
    'array-bracket-spacing': OFF,
    'object-curly-spacing': OFF,
    'object-shorthand': OFF,
    'arrow-parens': OFF,
    'no-await-in-loop': OFF,
    'flow-object-type': OFF,
    'func-params-comma-dangle': OFF,
    'babel/generator-star-spacing': WARN,
    'babel/new-cap': WARN,
    'babel/array-bracket-spacing': WARN,
    'babel/object-curly-spacing': [WARN, 'always'],
    'babel/object-shorthand': WARN,
    'babel/arrow-parens': OFF,
    'babel/no-await-in-loop': WARN,
    'babel/flow-object-type': WARN,
    'babel/func-params-comma-dangle': [OFF, 'always-multiline'],
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
