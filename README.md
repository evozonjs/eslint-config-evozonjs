# eslint-config-evozonjs

[![npm version](https://badge.fury.io/js/eslint-config-evozonjs.svg)](http://badge.fury.io/js/eslint-config-evozonjs)

This package provides EvozonJS's .eslintrc based on the popular eslint-config-airbnb.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-evozonjs

Our default export contains all of our ESLint rules, including ECMAScript 6+
and React and a few extras we added ourselves. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`,
and `eslint-plugin-jsx-a11y`.

1. `npm install --save-dev eslint-config-evozonjs eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint`
2. add `"extends": "evozonjs"` to your .eslintrc. That's it.

You can make sure this module lints with itself using `npm run lint`.
