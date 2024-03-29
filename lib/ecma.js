module.exports = {
  extends: [
    '../configs/best-practices',
    '../configs/variables',
    '../configs/errors',
    '../configs/style',
  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
