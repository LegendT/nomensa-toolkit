'use strict';
// Docs: http://stylelint.io
// Style lint rule detail: https://github.com/stylelint/stylelint/tree/master/src/rules/RULE-NAME

module.exports = {
  plugins: [
    "stylelint-scss",
  ],
  ignoreFiles: [],
  rules: {
    "indentation": [
      2,
      {
        "indentInsideParens": "once-at-root-twice-in-block",
        "ignore": ["value", "param"],
        "indentClosingBrace": false
      }
    ],
    "declaration-colon-space-after": "always",
    "declaration-no-important": true,
    "max-nesting-depth": 3,
    "selector-max-specificity": "0,3,3",
    "selector-max-id": 0,
    "scss/at-extend-no-missing-placeholder": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "shorthand-property-no-redundant-values": true,
    "no-invalid-double-slash-comments": true,
    "function-comma-space-after": "always",
    "function-whitespace-after": "always",
  },
};
