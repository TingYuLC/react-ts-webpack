let webpackConfig;

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      webpackConfig = require('./build/webpack.dev.conf');
      break;
    case 'production':
      webpackConfig = require('./build/webpack.prod.conf');
      break;
    case 'dll':
      webpackConfig = require('./build/webpack.dll.conf');
      break;
    default:
        webpackConfig = require('./build/webpack.dev.conf');
      break;
  }
  return webpackConfig;
}