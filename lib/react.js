/**
 * @Description:
 * @Author: leon
 * @Date: 2024/4/1 09:39
 */
const { IS_TYPESCRIPT } = require('./utils/index');

module.exports = {
  extends: [
    '../configs/react',
    '../configs/jsx-a11y',
    IS_TYPESCRIPT && '../configs/typescript-react',
  ]
    .filter(_ => !!_)
    .map(require.resolve)
}
