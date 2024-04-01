const { IS_DEVELOPMENT } = require('../lib/utils/index.js')

module.exports = {
  rules: {
    // https://zh-hans.eslint.org/docs/latest/rules/init-declarations
    // Require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-catch-shadow
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-delete-var
    // Disallow deleting variables
    'no-delete-var': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-label-var
    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-globals
    // Disallow specified global variables
    'no-restricted-globals': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-shadow
    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-shadow-restricted-names
    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-undef
    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    'no-undef': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-undef-init
    // Disallow initializing variables to undefined
    'no-undef-init': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-undefined
    // Disallow the use of undefined as an identifier
    'no-undefined': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-vars
    // Disallow unused variables
    'no-unused-vars': [IS_DEVELOPMENT ? 'warn' : 'error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // https://zh-hans.eslint.org/docs/latest/rules/no-use-before-define
    // Disallow the use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
  },
};
