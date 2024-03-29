module.exports = {
  extends: [
    '../configs/best-practices',
    '../configs/variables',

  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
