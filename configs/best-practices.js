module.exports = {
  rules: {
    // https://zh-hans.eslint.org/docs/latest/rules/accessor-pairs
    // Enforce getter and setter pairs in objects and classes
    'accessor-pairs': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/array-callback-return
    // Enforce return statements in callbacks of array methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // https://zh-hans.eslint.org/docs/latest/rules/block-scoped-var
    // Enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/complexity
    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: ['error', 25],

    // https://zh-hans.eslint.org/docs/latest/rules/class-methods-use-this
    // Enforce that class methods utilize this
    'class-methods-use-this': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/consistent-return
    // Require return statements to either always or never specify values
    'consistent-return': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/curly
    // Enforce consistent brace style for all control statements
    curly: ['error', 'multi-line'],

    // https://zh-hans.eslint.org/docs/latest/rules/default-case
    // Require default cases in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // https://zh-hans.eslint.org/docs/latest/rules/dot-notation
    // Enforce dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // https://zh-hans.eslint.org/docs/latest/rules/dot-location
    // Enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // https://zh-hans.eslint.org/docs/latest/rules/eqeqeq
    // Require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // https://zh-hans.eslint.org/docs/latest/rules/guard-for-in
    // Require for-in loops to include an if statement
    'guard-for-in': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/max-classes-per-file
    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 1],

    // https://zh-hans.eslint.org/docs/latest/rules/no-alert
    // Disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // https://zh-hans.eslint.org/docs/latest/rules/no-caller
    // Disallow the use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-case-declarations
    // Disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-div-regex
    // Disallow equal signs explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-else-return
    // Disallow else blocks after return statements in if statements
    'no-else-return': ['error', { allowElseIf: false }],

    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-function
    // Disallow empty functions
    'no-empty-function': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-empty-pattern
    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-eq-null
    // Disallow null comparisons without type-checking operators
    'no-eq-null': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-eval
    // Disallow the use of eval()
    'no-eval': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-extend-native
    // Disallow extending native types
    'no-extend-native': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-bind
    // Disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-extra-label
    // Disallow unnecessary labels
    'no-extra-label': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-fallthrough
    // Disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-floating-decimal
    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-global-assign
    // Disallow assignments to native objects or read-only global variables
    'no-global-assign': ['error', { exceptions: [] }],

    // https://zh-hans.eslint.org/docs/latest/rules/no-implicit-coercion
    // Disallow shorthand type conversions
    'no-implicit-coercion': [
      'off', {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],

    // https://zh-hans.eslint.org/docs/latest/rules/no-implicit-globals
    // Disallow declarations in the global scope
    'no-implicit-globals': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-implied-eval
    // Disallow the use of eval()-like methods
    'no-implied-eval': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-invalid-this
    // Disallow use of this in contexts where the value of this is undefined
    'no-invalid-this': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-iterator
    // Disallow the use of the __iterator__ property
    'no-iterator': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-labels
    // Disallow labeled statements
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // https://zh-hans.eslint.org/docs/latest/rules/no-lone-blocks
    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-loop-func
    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-magic-numbers
    // Disallow magic numbers
    'no-magic-numbers': [
      'off', {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-spaces
    // Disallow multiple spaces
    'no-multi-spaces': [
      'error', {
        ignoreEOLComments: false,
      },
    ],

    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-str
    // Disallow multiline strings
    'no-multi-str': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-new
    // Disallow new operators outside of assignments or comparisons
    'no-new': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-new-func
    // Disallow new operators with the Function object
    'no-new-func': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-new-wrappers
    // Disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-octal
    // Disallow octal literals
    'no-octal': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-octal-escape
    // Disallow octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal-escape': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-param-reassign
    // Disallow reassigning function parameters
    'no-param-reassign': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-proto
    // Disallow the use of the __proto__ property
    'no-proto': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-redeclare
    // Disallow variable redeclaration
    'no-redeclare': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-properties
    // Disallow certain properties on certain objects
    'no-restricted-properties': [
      'error', {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    // https://zh-hans.eslint.org/docs/latest/rules/no-return-await
    // Disallow unnecessary return await
    'no-return-assign': ['error', 'always'],

    // https://zh-hans.eslint.org/docs/latest/rules/no-script-url
    // Disallow javascript: urls
    'no-script-url': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-self-compare
    // Disallow comparisons where both sides are exactly the same
    'no-self-assign': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-self-compare
    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-sequences
    // Disallow comma operators
    'no-sequences': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-throw-literal
    // Disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-unmodified-loop-condition
    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-expressions
    // Disallow unused expressions
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // https://zh-hans.eslint.org/docs/latest/rules/no-unused-labels
    // Disallow unused labels
    'no-unused-labels': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-call
    // Disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-catch
    // Disallow unnecessary catch clauses
    'no-useless-catch': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-concat
    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-escape
    // Disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-return
    // Disallow redundant return statements
    'no-useless-return': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-void
    // Disallow void operators
    'no-void': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-warning-comments
    // Disallow specified warning terms in comments
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // https://zh-hans.eslint.org/docs/latest/rules/no-with
    // Disallow with statements
    'no-with': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/prefer-promise-reject-errors
    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // https://zh-hans.eslint.org/docs/latest/rules/prefer-named-capture-group
    // Enforce using named capture group in regular expression
    'prefer-named-capture-group': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/radix
    // Enforce the consistent use of the radix argument when using parseInt()
    radix: 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/require-await
    // Disallow async functions which have no await expression
    'require-await': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/require-unicode-regexp
    // Enforce the use of u or v flag on RegExp
    'require-unicode-regexp': 'off',

    // https://zh-hans.eslint.org/docs/latest/rules/vars-on-top
    // Require var declarations be placed at the top of their containing scope
    'vars-on-top': 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/wrap-iife
    // Require parentheses around immediate function invocations
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // https://zh-hans.eslint.org/docs/latest/rules/yoda
    // Require or disallow “Yoda” conditions
    yoda: 'error',

    // https://zh-hans.eslint.org/docs/latest/rules/no-bitwise
    // Disallow bitwise operators
    'no-bitwise': 'error',
  },
};
