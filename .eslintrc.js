module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    sourceType: "module",
  },

  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
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
  },
};
