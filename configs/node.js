module.exports = {
  extends: ['plugin:n/recommended'],
  env: {
    node: true,
  },

  rules: {
    // Require return statements after callbacks
    // https://zh-hans.eslint.org/docs/latest/rules/callback-return
    'callback-return': 'off',

    // require require() calls to be placed at top-level module scope
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
    'n/global-require': 'off',

    // require error handling in callbacks
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/handle-callback-err.md
    'n/handle-callback-err': 'off',

    // enforce either Buffer or require("buffer").Buffer
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/prefer-global/buffer.md
    'n/prefer-global/buffer': 'error',

    // disallow require calls to be mixed with regular variable declarations
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-mixed-requires.md
    'n/no-mixed-requires': ['off', false],

    // disallow new operators with calls to require
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
    'n/no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-path-concat.md
    'n/no-path-concat': 'error',

    // disallow the use of process.env
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
    'n/no-process-env': 'off',

    // disallow the use of process.exit()
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
    'n/no-process-exit': 'off',

    // disallow synchronous methods
    // https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-sync.md
    'n/no-sync': 'off',
  },
};
