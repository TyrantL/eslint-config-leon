const { IS_DEVELOPMENT } = require('../lib/utils/index.js')

module.exports = {
  rules: {
    // https://zh-hans.eslint.org/docs/latest/rules/init-declarations
    // Require or disallow initialization in variable declarations
    'for-direction': 'error',

    // Enforce return statements in getters
    // https://zh-hans.eslint.org/docs/latest/rules/getter-return
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow using an async function as a Promise executor
    // https://zh-hans.eslint.org/docs/latest/rules/no-async-promise-executor
    'no-async-promise-executor': 'off',

    // Disallow await inside of loops
    // https://zh-hans.eslint.org/docs/latest/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // Disallow comparing against -0
    // https://zh-hans.eslint.org/docs/latest/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // disallow assignment in conditional expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-cond-assign#always
    'no-cond-assign': ['error', 'always'],

    // Disallow the use of console, warn when development
    // https://zh-hans.eslint.org/docs/latest/rules/no-console
    'no-console': [IS_DEVELOPMENT ? 'warn' : 'error', { allow: ['error'] }],

    // Disallow the use of debugger, warn when development
    // https://zh-hans.eslint.org/docs/latest/rules/no-debugger
    'no-debugger': IS_DEVELOPMENT ? 'warn' : 'error',

    // Disallow constant expressions in conditions
    // https://zh-hans.eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'warn',

    // Disallow control characters in regular expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow duplicate arguments in function definitions
    // https://zh-hans.eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate keys in object literals
    // https://zh-hans.eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // https://zh-hans.eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    // https://zh-hans.eslint.org/docs/latest/rules/no-empty
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow reassigning exceptions in catch clauses
    // https://zh-hans.eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-parens
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    }],

    // Disallow unnecessary semicolons
    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow reassigning function declarations
    // https://zh-hans.eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // https://zh-hans.eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    // https://zh-hans.eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://zh-hans.eslint.org/docs/latest/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow calling global object properties as functions
    // https://zh-hans.eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow calling some Object.prototype methods directly on objects
    // https://zh-hans.eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in regular expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Disallow sparse arrays
    // https://zh-hans.eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://zh-hans.eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // https://zh-hans.eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow control flow statements in finally blocks
    // https://zh-hans.eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // https://zh-hans.eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Disallow negating the left operand in in expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-negated-in-lhs
    'no-negated-in-lhs': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://zh-hans.eslint.org/docs/latest/rules/require-atomic-updates
    'require-atomic-updates': 'off',

    // Require calls to isNaN() when checking for NaN
    // https://zh-hans.eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',

    // Enforce valid JSDoc comments
    // https://zh-hans.eslint.org/docs/latest/rules/valid-jsdoc
    'valid-jsdoc': 'off',

    // Enforce comparing typeof expressions against valid strings
    // https://zh-hans.eslint.org/docs/latest/rules/valid-typeof
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
