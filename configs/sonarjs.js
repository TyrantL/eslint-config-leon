module.exports = {
  extends: [
    'plugin:sonarjs/recommended',
  ],
  plugins: [
    'sonarjs',
  ],
  rules: {
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/mccabe-complexity': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-duplicated-branches': 'off',
  },
};
