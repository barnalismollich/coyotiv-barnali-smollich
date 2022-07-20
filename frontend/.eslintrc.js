module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended', '@vue/prettier'],
  // parserOptions: {
  //   parser: '@babel/eslint-parser',
  // },
  // babel causes too many errors therefore it is deactivated
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        trailingComma: 'es5',
        tabWidth: 2,
      },
    ],
  },
}
