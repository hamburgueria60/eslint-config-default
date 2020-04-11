module.exports = {
  extends: ['@hamburgueria60/eslint-config-default', 'prettier/react'],
  globals: {
    angular: true,
  },
  parserOptions: { ecmaVersion: 6, sourceType: 'module' },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.test.js'],
      globals: {
        inject: true,
      },
      env: {
        jest: true,
        mocha: true,
      },
    },
  ],
}
