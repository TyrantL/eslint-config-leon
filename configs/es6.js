module.exports = {
  env: {
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
    },
  },

  rules: {
    // Require braces around arrow function bodies
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-body-style
    'arrow-body-style': ['off', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // Require parentheses around arrow function arguments
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-parens
    'arrow-parens': ['off', 'always'],

    // Enforce consistent spacing before and after the arrow in arrow functions
    // https://zh-hans.eslint.org/docs/latest/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    // Disallow this/super before calling super() in constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-this-before-super
    'constructor-super': 'error',

    // Enforce consistent spacing around * operators in generator functions
    // https://zh-hans.eslint.org/docs/latest/rules/generator-star-spacing
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Disallow reassigning class members
    // https://zh-hans.eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // https://zh-hans.eslint.org/docs/latest/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // Disallow reassigning const variables
    // https://zh-hans.eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // https://zh-hans.eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    // https://zh-hans.eslint.org/docs/latest/rules/no-duplicate-imports
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // Disallow specified modules when loaded by import
    // https://zh-hans.eslint.org/docs/latest/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specified modules when loaded by import
    // https://zh-hans.eslint.org/docs/latest/rules/no-restricted-imports
    'no-restricted-imports': ['off', {
      paths: [],
      patterns: [],
    }],

    // Disallow this/super before calling super() in constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // https://zh-hans.eslint.org/docs/latest/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // Require let or const instead of var
    // https://zh-hans.eslint.org/docs/latest/rules/no-var
    'no-var': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    // https://zh-hans.eslint.org/docs/latest/rules/object-shorthand
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // Require using arrow functions for callbacks
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-arrow-callback
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // Require const declarations for variables that are never reassigned after declared
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // Require destructuring from arrays and/or objects
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-destructuring
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // Require Reflect methods where applicable
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-reflect
    'prefer-reflect': 'off',

    // Require rest parameters instead of arguments
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Require spread operators instead of .apply()
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'error',

    // Require template literals instead of string concatenation
    // https://zh-hans.eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    // Require generator functions to contain yield
    // https://zh-hans.eslint.org/docs/latest/rules/require-yield
    'require-yield': 'error',

    // Enforce spacing between rest and spread operators and their expressions
    // https://zh-hans.eslint.org/docs/latest/rules/rest-spread-spacing
    'rest-spread-spacing': ['error', 'never'],

    // Enforce sorted import declarations within modules
    // https://zh-hans.eslint.org/docs/latest/rules/sort-imports
    'sort-imports': ['off', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // Require symbol descriptions
    // https://zh-hans.eslint.org/docs/latest/rules/symbol-description
    'symbol-description': 'error',

    // Require or disallow spacing around embedded expressions of template strings
    // https://zh-hans.eslint.org/docs/latest/rules/template-curly-spacing
    'template-curly-spacing': 'error',

    // Require or disallow spacing around the * in yield* expressions
    // https://zh-hans.eslint.org/docs/latest/rules/yield-star-spacing
    'yield-star-spacing': ['error', 'after'],
  },
};
