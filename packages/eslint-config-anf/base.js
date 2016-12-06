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
    'linebreak-style': OFF,
    'max-len': [WARN, 120],
    'no-duplicate-imports': OFF,
    'no-else-return': OFF,
    'no-mixed-operators': OFF,
    'no-return-assign': OFF,
    'no-underscore-dangle': OFF,
    'no-use-before-define': OFF,
    'prefer-template': OFF,
    'no-restricted-syntax': [
      ERROR,
      'LabeledStatement',
      'WithStatement',
    ],
    'methods-use-this': OFF,

    'babel/array-bracket-spacing': WARN,
    'babel/arrow-parens': OFF,
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
    'flowtype/object-type-delimiter': [ERROR, 'comma'],
    'flowtype/boolean-style': [ERROR, 'boolean'],
    'flowtype/delimiter-dangle': [WARN, 'always-multiline'],
    'flowtype/generic-spacing': [WARN, 'never'],
    'flowtype/no-dupe-keys': ERROR,
    'flowtype/no-weak-types': OFF,
    'flowtype/semi': WARN,
    'flowtype/space-before-generic-bracket': WARN,
    'flowtype/union-intersection-spacing': WARN,

    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'import/no-unresolved': [ERROR, { ignore: ['\.png$', '^!'] }], // eslint-disable-line no-useless-escape
    'import/prefer-default-export': OFF,

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
