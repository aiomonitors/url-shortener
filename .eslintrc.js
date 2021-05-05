module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier", "import"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/ban-ts-comment": "off",
    "import/prefer-default-export": ["warn"],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
    "prettier/prettier": "error",
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "either",
        depth: 3,
      },
    ],
    camelcase: 0, // Camelcasing needs to be disabled to allow format of data in API responses. e.g. UserData interface
    semi: [2, "always"],
    "import/no-extraneous-dependencies": 0,
    "no-use-before-define": 0,
    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/no-named-as-default": 0,
  },
  settings: {
    "import/ignore": [".svg"],
    "import/resolver": {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
};
