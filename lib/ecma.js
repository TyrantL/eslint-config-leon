const isTypescript = require('./utils/index');
module.exports = {
  extends: [
    '../configs/best-practices',
    '../configs/variables',
    '../configs/errors',
    '../configs/style',
    '../configs/es6',
    '../configs/strict',
    '../configs/imports',
    '../configs/sonarjs',
    isTypescript && '../configs/typescript',
  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
