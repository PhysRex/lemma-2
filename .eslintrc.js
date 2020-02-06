module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  "parser": "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // windows linebreaks when not in production environment
    'linebreak-style': ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")],

    // state doesn't need a constructor anymore
    "react/state-in-constructor": [1, 'never']
  },
};
