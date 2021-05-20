module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    sourceType: "module",
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier/vue",
    // "eslint:recommended",
  ],

  plugins: [],

  globals: {
    $nuxt: true,
  },

  // add your custom rules here
  rules: {
    "linebreak-style": 0,
    "new-cap": 0,
    "require-jsdoc": 0,

    "vue/component-name-in-template-casing": ["error", "PascalCase"],

    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
