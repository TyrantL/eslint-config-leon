module.exports = {
  extends: [
    '../configs/best-practices',
    '../configs/variables',
    '../configs/errors',
    '../configs/style',
    '../configs/es6'
  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
