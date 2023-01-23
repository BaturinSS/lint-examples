module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: "**/*.vue",
      parser: "@vue-eslint/parser",
    },
    {
      files: "**/*.test.*",
      rules: {
        "@typescript-eslint/no-unsafe-call": "off",
      },
    },
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: "**/*.ts*",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
    },
  ],
};
