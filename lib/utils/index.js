const fs = require('fs');
const path = require('path');

IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
IS_TYPESCRIPT = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));

module.exports = {
  IS_DEVELOPMENT,
  IS_TYPESCRIPT,
}
