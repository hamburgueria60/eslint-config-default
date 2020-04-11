const prettierOptions = require('./.prettierrc')

const errorOnProduction = process.env.NODE_ENV === 'production' ? 'error' : 'off'

module.exports = {
  extends: ['@hamburguerai60/eslint-config-default'],
  env: {
    commonjs: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'simple-import-sort/sort': 'off',
    'sort-imports': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
}
