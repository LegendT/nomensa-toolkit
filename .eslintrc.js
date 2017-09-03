// rule reference: http://eslint.org/docs/rules
// individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
module.exports = {
  extends: "airbnb",
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    domready: true,
  },
  rules: {
    'no-comma-dangle': [0],
    'strict': [0],
    'no-param-reassign': [1, {
      props: false,
    }],
    'react/require-extension': [0],
    "space-unary-ops": [
      2, {
        "words": true,
        "nonwords": false,
        "overrides": {
          "new": false,
          "++": true
        }
      }
    ],
  }
};
