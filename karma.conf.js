var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'tests/*.spec.js' }
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'tests/*.js': ['webpack']
    },
    webpackMiddleware: {
      noInfo: true
    },
    webpack: webpackConfig
  });
};