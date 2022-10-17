module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true, // Add this line!
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier', // Add this line!
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'on',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
