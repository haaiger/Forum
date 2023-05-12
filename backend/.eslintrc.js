module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'linebreak-style': 0,
  },
};
