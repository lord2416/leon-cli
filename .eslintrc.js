module.exports = {
  extends: "eslint:recommended",
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  rules: {
    "no-console": "off",
    strict: ["error", "global"],
    curly: "warn"
  }
};
