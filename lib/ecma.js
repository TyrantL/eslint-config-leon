module.exports = {
  extends: [
    '../configs/best-practices',
    '../configs/variables',
    '../configs/errors',
    '../configs/style',
    '../configs/es6',
    '../configs/strict',
    '../configs/imports',
  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
