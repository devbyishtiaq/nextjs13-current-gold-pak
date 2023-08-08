module.exports = {
  extends: ["plugin:prettier/recommended", "plugin:@next/next/recommended"],
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  env: {
    node: true,
    browser: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
      },
    ],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@next/next/no-img-element": "off",
  },
  parser: "@typescript-eslint/parser",
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
};
