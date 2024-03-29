module.exports = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets
    // https://zh-hans.eslint.org/docs/latest/rules/array-bracket-newline
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // Enforce line breaks after each array element
    // https://zh-hans.eslint.org/docs/latest/rules/array-element-newline
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // Enforce consistent spacing inside array brackets
    // https://zh-hans.eslint.org/docs/latest/rules/array-bracket-spacing
    'array-bracket-spacing': ['error', 'never'],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://zh-hans.eslint.org/docs/latest/rules/block-spacing
    'block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks
    // https://zh-hans.eslint.org/docs/latest/rules/brace-style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Enforce camelcase naming convention
    // https://zh-hans.eslint.org/docs/latest/rules/camelcase
    camelcase: 'off',

    // Enforce or disallow capitalization of the first letter of a comment
    // https://zh-hans.eslint.org/docs/latest/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],

    // Require or disallow trailing commas
    // https://zh-hans.eslint.org/docs/latest/rules/comma-dangle
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],

    // Enforce consistent spacing before and after commas
    // https://zh-hans.eslint.org/docs/latest/rules/comma-spacing
    'comma-spacing': ['error', { before: false, after: true }],

    // Enforce consistent comma style
    // https://zh-hans.eslint.org/docs/latest/rules/comma-style
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    // Enforce consistent spacing inside computed property brackets
    // https://zh-hans.eslint.org/docs/latest/rules/computed-property-spacing
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context
    // https://zh-hans.eslint.org/docs/latest/rules/consistent-this
    'consistent-this': 'off',

    // Require or disallow newline at the end of files
    // https://zh-hans.eslint.org/docs/latest/rules/eol-last
    'eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations
    // https://zh-hans.eslint.org/docs/latest/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    // https://zh-hans.eslint.org/docs/latest/rules/func-name-matching
    'func-name-matching': ['off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    }],

    // Require or disallow named function expressions
    // https://zh-hans.eslint.org/docs/latest/rules/func-names
    'func-names': 'off',

    // Enforce the consistent use of either function declarations or expressions
    // https://zh-hans.eslint.org/docs/latest/rules/func-style
    'func-style': ['off', 'expression'],

    // Enforce consistent line breaks inside function parentheses
    // https://zh-hans.eslint.org/docs/latest/rules/function-paren-newline
    'function-paren-newline': ['error', 'consistent'],

    // Disallow specified identifiers
    // https://zh-hans.eslint.org/docs/latest/rules/id-denylist
    'id-denylist': 'off',

    // Enforce minimum and maximum identifier lengths
    // https://zh-hans.eslint.org/docs/latest/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // https://zh-hans.eslint.org/docs/latest/rules/id-match
    'id-match': 'off',

    // Enforce the location of arrow function bodies
    // https://zh-hans.eslint.org/docs/latest/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Enforce consistent indentation
    // https://zh-hans.eslint.org/docs/latest/rules/indent
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // https://zh-hans.eslint.org/docs/latest/rules/jsx-quotes
    'jsx-quotes': ['off', 'prefer-double'],

    // Enforce consistent spacing between keys and values in object literal properties
    // https://zh-hans.eslint.org/docs/latest/rules/key-spacing
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing before and after keywords
    // https://zh-hans.eslint.org/docs/latest/rules/keyword-spacing
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    }],

    // Enforce position of line comments
    // https://zh-hans.eslint.org/docs/latest/rules/line-comment-position
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // Enforce consistent linebreak style
    // https://zh-hans.eslint.org/docs/latest/rules/linebreak-style
    'linebreak-style': 'off',

    // Require or disallow an empty line between class members
    // https://zh-hans.eslint.org/docs/latest/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // Require empty lines around comments
    // https://zh-hans.eslint.org/docs/latest/rules/lines-around-comment
    'lines-around-comment': 'off',

    // Require or disallow newlines around directives
    // https://zh-hans.eslint.org/docs/latest/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // Enforce a maximum depth that blocks can be nested
    // https://zh-hans.eslint.org/docs/latest/rules/max-depth
    'max-depth': ['off', 4],

    // Enforce a maximum line length
    // https://zh-hans.eslint.org/docs/latest/rules/max-len
    'max-len': ['error', 250, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
    }],

    // Enforce a maximum number of lines per file
    // https://zh-hans.eslint.org/docs/latest/rules/max-lines
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    }],

    // Enforce a maximum number of lines of code in a function
    // https://zh-hans.eslint.org/docs/latest/rules/max-lines-per-function
    'max-lines-per-function': ['off', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    }],

    // Enforce a maximum depth that callbacks can be nested
    // https://zh-hans.eslint.org/docs/latest/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    // https://zh-hans.eslint.org/docs/latest/rules/max-params
    'max-params': ['off', 3],

    // Enforce a maximum number of statements allowed in function blocks
    // https://zh-hans.eslint.org/docs/latest/rules/max-statements
    'max-statements': ['off', 10],

    // Enforce a maximum number of statements allowed per line
    // https://zh-hans.eslint.org/docs/latest/rules/max-statements-per-line
    'max-statements-per-line': ['error', { max: 1 }],

    // Enforce a particular style for multiline comments
    // https://zh-hans.eslint.org/docs/latest/rules/multiline-comment-style
    'multiline-comment-style': ['off', 'starred-block'],

    // Enforce newlines between operands of ternary expressions
    // https://zh-hans.eslint.org/docs/latest/rules/multiline-ternary
    'multiline-ternary': ['off', 'never'],

    // Require constructor names to begin with a capital letter
    // https://zh-hans.eslint.org/docs/latest/rules/new-cap
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    // https://zh-hans.eslint.org/docs/latest/rules/new-parens
    'new-parens': 'error',

    // Require an empty line before return statements
    // https://zh-hans.eslint.org/docs/latest/rules/newline-before-return
    'newline-before-return': 'off',

    // Require a newline after each call in a method chain
    // https://zh-hans.eslint.org/docs/latest/rules/newline-per-chained-call
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // Disallow Array constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // https://zh-hans.eslint.org/docs/latest/rules/no-bitwise
    'no-bitwise': 'error',

    // Disallow continue statements
    // https://zh-hans.eslint.org/docs/latest/rules/no-continue
    'no-continue': 'off',

    // Disallow inline comments after code
    // https://zh-hans.eslint.org/docs/latest/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    // https://zh-hans.eslint.org/docs/latest/rules/no-lonely-if
    'no-lonely-if': 'off',

    // Disallow mixed binary operators
    // https://zh-hans.eslint.org/docs/latest/rules/no-mixed-operators
    'no-mixed-operators': 'off',

    // Disallow mixed spaces and tabs for indentation
    // https://zh-hans.eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow use of chained assignment expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-multi-assign
    'no-multi-assign': 'off',

    // Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://zh-hans.eslint.org/docs/latest/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1, maxEOF: 0 }],

    // Disallow negated conditions
    // https://zh-hans.eslint.org/docs/latest/rules/no-negated-condition
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    // https://zh-hans.eslint.org/docs/latest/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow Object constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-object
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --
    // https://zh-hans.eslint.org/docs/latest/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow specified syntax
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-syntax
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // Disallow all tabs
    // https://zh-hans.eslint.org/docs/latest/rules/no-tabs
    'no-tabs': 'error',

    // Disallow ternary operators
    // https://zh-hans.eslint.org/docs/latest/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // https://zh-hans.eslint.org/docs/latest/rules/no-trailing-spaces
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // Disallow dangling underscores in identifiers
    // https://zh-hans.eslint.org/docs/latest/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // Disallow ternary operators when simpler alternatives exist
    // also, prefer `a || b` over `a ? a : b`
    // https://zh-hans.eslint.org/docs/latest/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace before properties
    // https://zh-hans.eslint.org/docs/latest/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    // https://zh-hans.eslint.org/docs/latest/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // Enforce consistent spacing inside braces
    // https://zh-hans.eslint.org/docs/latest/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always'],

    // Enforce consistent line breaks after opening and before closing braces
    // https://zh-hans.eslint.org/docs/latest/rules/object-curly-newline
    'object-curly-newline': 'off',

    // Enforce placing object properties on separate lines
    // https://zh-hans.eslint.org/docs/latest/rules/object-property-newline
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Enforce variables to be declared either together or separately in functions
    // https://zh-hans.eslint.org/docs/latest/rules/one-var
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // https://zh-hans.eslint.org/docs/latest/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': ['error', 'always'],

    // Require or disallow newlines around variable declarations
    // https://zh-hans.eslint.org/docs/latest/rules/operator-assignment
    'operator-assignment': ['error', 'always'],

    // Enforce consistent linebreak style for operators
    // https://zh-hans.eslint.org/docs/latest/rules/operator-linebreak
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Require or disallow padding within blocks
    // https://zh-hans.eslint.org/docs/latest/rules/padded-blocks
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    // https://zh-hans.eslint.org/docs/latest/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names
    // https://zh-hans.eslint.org/docs/latest/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // sEnforce the consistent use of either backticks, double, or single quotes
    // https://zh-hans.eslint.org/docs/latest/rules/quotes
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // Require or disallow semicolons instead of ASI
    // https://zh-hans.eslint.org/docs/latest/rules/semi
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    // https://zh-hans.eslint.org/docs/latest/rules/semi-spacing
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce consistent spacing before and after semicolons
    // https://zh-hans.eslint.org/docs/latest/rules/semi-style
    'semi-style': ['error', 'last'],

    // Require object keys to be sorted
    // https://zh-hans.eslint.org/docs/latest/rules/sort-keys
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // Require variables within the same declaration block to be sorted
    // https://zh-hans.eslint.org/docs/latest/rules/sort-vars
    'sort-vars': 'off',

    // Enforce consistent spacing before blocks
    // https://zh-hans.eslint.org/docs/latest/rules/space-before-blocks
    'space-before-blocks': 'error',

    // Enforce consistent spacing before function definition opening parenthesis
    // https://zh-hans.eslint.org/docs/latest/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Enforce consistent spacing inside parentheses
    // https://zh-hans.eslint.org/docs/latest/rules/space-in-parens
    'space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    // https://zh-hans.eslint.org/docs/latest/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    // https://zh-hans.eslint.org/docs/latest/rules/space-unary-ops
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // Enforce consistent spacing after the // or /* in a comment
    // https://zh-hans.eslint.org/docs/latest/rules/spaced-comment
    'spaced-comment': ['error', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'], // space here to support sprockets directives
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],

    // Enforce spacing around colons of switch statements
    // https://zh-hans.eslint.org/docs/latest/rules/switch-colon-spacing
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://zh-hans.eslint.org/docs/latest/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // Require or disallow Unicode byte order mark (BOM)
    // https://zh-hans.eslint.org/docs/latest/rules/unicode-bom
    'unicode-bom': ['error', 'never'],

    //Require parenthesis around regex literals
    // https://zh-hans.eslint.org/docs/latest/rules/wrap-regex
    'wrap-regex': 'off',
  },
};
