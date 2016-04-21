module.exports = {
  extends: [
    'airbnb',
  ].map(require.resolve),
  rules: {
    'max-len': [2, 80, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],
    'no-empty-pattern': 2,
    'arrow-parens': [2, 'always']
  }
};
