module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'space-before-function-paren': {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }
  }
}
