module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-alert": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
  },
  plugins: ["jest"],
};
