const prettierOptions = require('./.prettierrc')

const errorOnProduction = process.env.NODE_ENV === 'production' ? 'error' : 'off'

module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'eqeqeq': 'warn',
    'no-console': errorOnProduction,
    'no-debugger': errorOnProduction,
    'no-param-reassign': 'off',
    'no-unused-vars': 'error',
    'prefer-const': 'error',
    'prettier/prettier': ['error', prettierOptions],
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/sort': 'error',
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.test.js'],
      env: { jest: true },
    },
  ],
}
