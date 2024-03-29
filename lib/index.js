module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    require.resolve('./ecma')
  ]
}
