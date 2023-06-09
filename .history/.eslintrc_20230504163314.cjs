
module.exports = {
  globals: {
    process: true,
    require: true,
  },
  env: { browser: true, es2020: true, node: true, amd: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'no-undef': 'error',
    'react/prop-types' : 'off'
  }
}
