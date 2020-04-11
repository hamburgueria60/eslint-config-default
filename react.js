module.exports = {
  extends: ['@hamburgueria60/eslint-config-default', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
  },
}
