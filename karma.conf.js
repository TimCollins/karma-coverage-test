module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'tests/*.spec.js' }
    ],
    browsers: ['PhantomJS']
  });
};