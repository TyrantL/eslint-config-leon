module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    require.resolve('./ecma'),
    require.resolve('./react'),
    require.resolve('./node'),
  ]
}
